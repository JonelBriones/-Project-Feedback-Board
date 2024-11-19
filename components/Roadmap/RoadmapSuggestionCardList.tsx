import React from "react";
import RoadmapSuggestionCard from "./RoadmapSuggestionCard";

const RoadmapSuggestionCardList = ({ feedbacks, color, status }: any) => {
  return feedbacks.map(
    (feedback: any) =>
      feedback.status.toLowerCase() == status.toLowerCase() && (
        <RoadmapSuggestionCard
          key={feedback._id}
          {...feedback}
          color={color}
          status={status}
        />
      )
  );
};

export default RoadmapSuggestionCardList;
