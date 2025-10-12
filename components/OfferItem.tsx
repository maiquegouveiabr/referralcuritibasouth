import { Referral } from "@/interfaces";
import { Card } from "./ui/card";

type Props = {
  ref: Referral;
};

function OfferItem({ ref }: Props) {
  return (
    <Card className="max-w-[600px] p-3 m-0">
      <div className="flex flex-col">
        {ref.offersTopic && ref.offersTopic.topic && <p className="text-sm m-0 text-[var(--font-color)]">Requested Lesson Topic: {ref.offersTopic.topic}</p>}
        {ref.personOffer && ref.personOffer.pageTitle && <p className="text-sm m-0 text-[var(--font-color)]">Headline: {ref.personOffer.pageTitle}</p>}
        {ref.offersTopic && ref.offersTopic.attributes && ref.offersTopic.attributes.thingsToConsider && (
          <>
            <p className="text-sm m-0 text-[var(--font-color)]">Things To Consider:</p>
            {ref.offersTopic?.attributes?.thingsToConsider?.map((item, i) => (
              <p key={i} className="text-sm m-0 text-[var(--font-color)]">
                {item}
              </p>
            ))}
          </>
        )}

        {ref.offerItem && ref.offerItem.campaignName && <p className="text-sm m-0 text-[var(--font-color)]">Ad Campaign Name: {ref.offerItem.campaignName}</p>}
        {ref.offerItem && ref.offerItem.adGroup && <p className="text-sm m-0 text-[var(--font-color)]">Ad Group: {ref.offerItem.adGroup}</p>}
        {ref.offerItem && ref.offerItem.adText && <p className="text-sm m-0 text-[var(--font-color)]">Ad Text: {ref.offerItem.adText}</p>}
      </div>
    </Card>
  );
}

export default OfferItem;
