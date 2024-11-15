import upvoteAction from "@/app/_actions/users/upvoteAction";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import RoadmapSuggestionCard from "./RoadmapSuggestionCard";

const RoadmapMobileView = ({
  feedbacks,
  status,
  description,
  color,
  session,
}: any) => {
  let statusLength = feedbacks.filter(
    (feedback: any) => feedback.status == status.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-8 h-[80vh]">
      <div>
        <h4 className="font-bold text-lg">
          {status} ({statusLength.length})
        </h4>
        <p className="text-[#647196]">{description}</p>
      </div>
      <RoadmapSuggestionCard
        feedbacks={feedbacks}
        status={status}
        session={session}
        color={color}
      />
    </div>
  );
};

export default RoadmapMobileView;
