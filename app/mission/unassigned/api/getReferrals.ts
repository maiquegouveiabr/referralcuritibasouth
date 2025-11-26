import { AreaInfo, Event, Referral } from "@/interfaces";
import { fetchChurchServer } from "@/util/api/fetchChurchServer";
import filterUniqueEvent from "@/util/filterUniqueEvent";
import pLimit from "p-limit";
import { filterUncontactedReferrals } from "../lib/filterUncontactedReferrals";

const limit = pLimit(10);

async function fetchAreaInfo(referrals: Referral[], refreshToken: string) {
  const tasks = referrals.map((ref) =>
    limit(async () => {
      const url = `https://referralmanager.churchofjesuschrist.org/services/mission/assignment?address=${ref.address}`;
      if (ref.areaId) {
        return { ...ref };
      }
      const areaInfo = await fetchChurchServer<AreaInfo>(url, refreshToken);
      return { ...ref, areaInfo };
    })
  );

  const results = await Promise.all(tasks);
  return results;
}

async function fetchEvents(referrals: Referral[], refreshToken: string) {
  const tasks = referrals.map((ref) =>
    limit(async () => {
      const url = `https://referralmanager.churchofjesuschrist.org/services/progress/timeline/${ref.personGuid}`;
      const contactAttempts = await fetchChurchServer<Event[]>(url, refreshToken);
      if (contactAttempts) {
        const filteredAttempts = filterUniqueEvent(contactAttempts.filter(({ timelineItemType }) => ["CONTACT", "TEACHING"].includes(timelineItemType)));
        return { ...ref, contactAttempts: filteredAttempts };
      } else {
        return { ...ref, contactAttempts: [] };
      }
    })
  );

  const results = await Promise.all(tasks);
  return results;
}

export async function loadReferralDetails(referrals: Referral[], refreshToken: string) {
  const withArea = await fetchAreaInfo(referrals, refreshToken);
  const withEvents = await fetchEvents(withArea, refreshToken);
  return withEvents;
}

export async function getReferrals(refreshToken: string) {
  try {
    const missionId = process.env.NEXT_PUBLIC_MISSION_ID;
    const url = `https://fastify-referral-api.vercel.app/api/referrals/unfiltered/all?refreshToken=${refreshToken}&missionId=${missionId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error("An unexpected error occurred.");
    const { referrals, length } = data as {
      referrals: Referral[];
      length: number;
    };
    const unassigned = referrals.filter((ref) => !ref.areaId && ref.personStatusId === 1);
    const uncontacted = filterUncontactedReferrals(referrals, []);

    return { unassigned, uncontacted };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return {
      unassigned: [],
      uncontacted: [],
    };
  }
}
