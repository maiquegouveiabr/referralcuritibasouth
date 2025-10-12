import { Referral } from "@/interfaces";

export const filterUncontactedReferrals = (referrals: Referral[], exclude: number[]) => {
  return referrals.filter(
    (ref) =>
      ref.areaId &&
      (ref.referralStatusId === 10 || ref.referralStatusId === 20) &&
      ref.personStatusId !== 40 &&
      ref.zoneId &&
      !exclude.some((item) => item === ref.zoneId)
  );
};
