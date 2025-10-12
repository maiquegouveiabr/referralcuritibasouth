import { Referral } from "@/interfaces";
import timestampToDate from "@/util/timestampToDate";
import { Card, CardDescription, CardTitle } from "./ui/card";
import EventList from "./EventList";
import OfferItem from "./OfferItem";
import PhoneMatchList from "./PhoneMatchList";
import { Badge } from "./ui/badge";
import checkIfReferenceWasCreatedByMissionary from "@/util/checkIfReferenceWasCreatedByMissionary";
import { BadgeCheckIcon } from "lucide-react";

type Props = {
  ref: Referral;
  children: React.ReactNode;
};

function ReferralItem({ ref, children }: Props) {
  const byMissionary = checkIfReferenceWasCreatedByMissionary(ref.personGuid);
  return (
    <li>
      <Card className="w-fit p-3">
        <div className="flex flex-col gap-1">
          <Badge variant="secondary" className={`${byMissionary ? "bg-yellow-500" : "bg-blue-500"} text-white dark:bg-blue-600 mb-2`}>
            <BadgeCheckIcon />
            {byMissionary ? "MISSIONARY" : "SYSTEM"}
          </Badge>

          <CardTitle className="leading-tight text-[var(--font-color)]">
            <a href={`https://referralmanager.churchofjesuschrist.org/person/${ref.personGuid}`} target="_blank" rel="noopener noreferrer">
              {ref.firstName} {ref.lastName ?? ""}
            </a>
          </CardTitle>
          <CardDescription className="leading-tight text-[var(--font-color)]">{timestampToDate(new Date(ref.createDate).getTime(), true)}</CardDescription>
          {ref.contactInfo?.phoneNumbers?.[0]?.number && (
            <CardDescription className="leading-tight text-[var(--font-color)]">{ref.contactInfo.phoneNumbers[0].number}</CardDescription>
          )}
          <CardDescription className="leading-tight text-[var(--font-color)]">{ref.address}</CardDescription>
          {ref.areaInfo?.proselytingAreas?.[0]?.name && (
            <CardDescription className="leading-tight text-[var(--font-color)]">Suggested Area: {ref.areaInfo.proselytingAreas[0].name}</CardDescription>
          )}
          {ref.areaName && <CardDescription className="leading-tight text-[var(--font-color)]">Assigned Area: {ref.areaName}</CardDescription>}
          {ref.contactAttempts && ref.contactAttempts.length > 0 && <EventList events={ref.contactAttempts} />}
        </div>
        {children}
        {ref.phoneMatches && ref.phoneMatches.length > 0 && <PhoneMatchList data={ref.phoneMatches} />}
        {ref.personOffer && (ref.offersTopic || ref.offerItem) && <OfferItem ref={ref} />}
      </Card>
    </li>
  );
}

export default ReferralItem;
