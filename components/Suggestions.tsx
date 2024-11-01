import React from "react";
import FeedbackCard from "./cards/FeedbackCard";
import NoSuggestionsFound from "./NoSuggestionsFound";

const Suggestions = ({ category, feedbacks, upvote, user }: any) => {
  function renderFeedback(category: string) {
    let noSuggestionsFound = feedbacks.filter(
      (feedback: any) => feedback.category == category
    );
    console.log(noSuggestionsFound);
    if (!noSuggestionsFound.length) {
      return <NoSuggestionsFound />;
    } else {
      return feedbacks.map(
        (feedback: any) =>
          feedback.category == category && (
            <FeedbackCard
              key={feedback.id}
              {...feedback}
              userID={user._id}
              upvote={upvote}
            />
          )
      );
    }
  }

  return (
    <div className="">
      {feedbacks.length > 0 ? (
        <div className="flex flex-col gap-4 h-[80vh] ">
          {category == "All" &&
            feedbacks.map((feedback: any) => (
              <FeedbackCard
                key={feedback.id}
                {...feedback}
                userID={user._id}
                upvote={upvote}
              />
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
