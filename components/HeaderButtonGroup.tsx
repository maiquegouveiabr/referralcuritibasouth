import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Referral, TitleOption } from "@/interfaces";
import { Button } from "./ui/button";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface HeaderButtonGroupProps {
  hideAssigned: boolean;
  setHideAssigned: React.Dispatch<React.SetStateAction<boolean>>;
  dataLoaded: boolean;
  setDataLoaded: (value: boolean) => void;
  referralsState: Referral[];
  setReferralsState: (referrals: Referral[]) => void;
  refreshToken: string;
  onSetDateOrder: () => void;
  onThreePlusEvents: () => void;
  onNoEventsThreeDays: () => void;
}

function HeaderButtonGroup({
  hideAssigned,
  setHideAssigned,
  dataLoaded,
  setDataLoaded,
  onSetDateOrder,
  onThreePlusEvents,
  onNoEventsThreeDays,
  setReferralsState,
  referralsState,
  refreshToken,
}: HeaderButtonGroupProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadData = async () => {
    try {
      let filtered;
      if (hideAssigned) {
        filtered = referralsState.filter((ref) => !ref.areaId);
      } else {
        filtered = referralsState.filter((ref) => ref.areaId);
      }
      setIsLoading(true);
      const url = `/api/referrals/complete?refreshToken=${refreshToken}`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(filtered),
      });
      if (!response.ok) throw new Error(response.statusText);
      const updated = await response.json();
      setDataLoaded(true);
      setIsLoading(false);
      setReferralsState(updated);
    } catch (error) {
      console.error(error);
      setDataLoaded(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-fit flex flex-col gap-1 items-end">
      {!dataLoaded && (
        <>
          <Button disabled={isLoading} className="cursor-pointer text-white" onClick={handleLoadData} variant="link">
            Load Data
          </Button>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" checked={hideAssigned} onClick={() => setHideAssigned((prev) => !prev)} />
            <Label className="text-white">{hideAssigned ? "Only Unassigned" : "Only Assigned"}</Label>
          </div>
        </>
      )}
      {dataLoaded && (
        <>
          <Button className="cursor-pointer text-white" onClick={onNoEventsThreeDays} variant="link">
            {TitleOption.OPTION_4}
          </Button>

          <Button className="cursor-pointer text-white" onClick={onThreePlusEvents} variant="link">
            {TitleOption.OPTION_3}
          </Button>

          <Button
            className="w-fit p-1 bg-white text-[#6e4d1d] font-semibold rounded-sm hover:bg-white hover:text-[#6e4d1d] cursor-pointer"
            onClick={onSetDateOrder}
            variant="ghost"
          >
            <SwapVertIcon />
          </Button>
        </>
      )}
    </div>
  );
}

export default HeaderButtonGroup;
