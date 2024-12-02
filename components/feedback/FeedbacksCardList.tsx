import React from "react";
import NoFeedbacksFound from "./NoFeedbacksFound";
import FeedbackCard from "./FeedbackCard";

const FeedbacksCardList = ({ category, feedbacks }: any) => {
  function renderFeedback(category: string) {
    let noSuggestionsFound = feedbacks.filter(
      (feedback: any) => feedback.category == category
    );
    if (!noSuggestionsFound.length) {
      return <NoFeedbacksFound />;
    } else {
      return feedbacks.map(
        (feedback: any) =>
          feedback.category == category && (
            <FeedbackCard key={feedback._id} {...feedback} />
          )
      );
    }
  }

  return (
    <div>
      {feedbacks.length > 0 ? (
        <div className="flex flex-col gap-4 h-[calc(100vh-200px)] overflow-y-auto px-4 md:p-0">
          {category == "All" &&
            feedbacks.map((feedback: any) => (
              <FeedbackCard {...feedback} key={feedback._id} />
            ))}
          {category == "Bug" && renderFeedback("Bug")}
          {category == "Feature" && renderFeedback("Feature")}
          {category == "Enhancement" && renderFeedback("Enhancement")}
          {category == "UX" && renderFeedback("UX")}
          {category == "UI" && renderFeedback("UI")}
        </div>
      ) : (
        <div>
          <NoFeedbacksFound />
        </div>
      )}
    </div>
  );
};

export default FeedbacksCardList;
