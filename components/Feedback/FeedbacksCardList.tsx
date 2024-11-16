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
    <>
      {feedbacks.length > 0 ? (
        <div className="flex flex-col gap-4 md:h-[80vh] h-[78vh] overflow-y-auto px-4 md:p-0">
          {category == "All" &&
            feedbacks.map((feedback: any) => (
              <FeedbackCard {...feedback} key={feedback._id} />
            ))}
          {category == "Bug" && renderFeedback("bug")}
          {category == "Feature" && renderFeedback("feature")}
          {category == "Enhancement" && renderFeedback("enhancement")}
          {category == "UX" && renderFeedback("ux")}
          {category == "UI" && renderFeedback("ui")}
        </div>
      ) : (
        <div className="flex flex-col gap-4 h-[80vh]">
          <NoFeedbacksFound />
        </div>
      )}
    </>
  );
};

export default FeedbacksCardList;
