import React from "react";
import FeedbackCard from "./cards/FeedbackCard";
import NoSuggestionsFound from "./NoSuggestionsFound";

const Suggestions = ({ category, feedbacks }: any) => {
  function renderFeedback(category: string) {
    let noSuggestionsFound = feedbacks.filter(
      (feedback: any) => feedback.category == category
    );
    if (!noSuggestionsFound.length) {
      return <NoSuggestionsFound />;
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
        <div className="flex flex-col gap-4 h-[80vh] overflow-y-auto ">
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
          <NoSuggestionsFound />
        </div>
      )}
    </div>
  );
};

export default Suggestions;
