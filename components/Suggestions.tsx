import Image from "next/image";
import React from "react";
import FeedbackCard from "./cards/FeedbackCard";

const Suggestions = ({ feedbacks, upvote, user }: any) => {
  return (
    <div className="h-[80vh] overflow-y-scroll">
      {feedbacks.length > 0 ? (
        <div className="flex flex-col gap-6 overflow-hidden">
          {feedbacks.map((feedback: any) => (
            <FeedbackCard
              key={feedback.id}
              {...feedback}
              userID={user._id}
              upvote={upvote}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white shadow-lg drop-shadow-lg  rounded-lg">
          <div className="flex flex-col place-items-center my-[100px] gap-10  ">
            <Image
              src={"/images/suggestions/illustration-empty.svg"}
              width={129.64}
              height={136.74}
              sizes={"100vh"}
              alt=""
            />
            <div className="flex flex-col place-items-center text-center gap-8">
              <h2 className="font-bold text-xl">There is no feedback yet.</h2>
              <p className="text-[#647196]">
                Got a suggestion? Found a bug that needs to be squashed? <br />{" "}
                We love hearing about new ideas to improve our app.
              </p>
              <button className="px-8 py-4 bg-[#ad1fea] text-white font-bold rounded-lg hover:bg-[#c75af6]">
                + Add Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggestions;
