import FeedbacksCardList from "@/components/Feedback/FeedbacksCardList";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import React from "react";

const page = async () => {
  await connectDB();
  const feedbacks = await Feedback.find({}).lean();
  const parsedFeedbacks = JSON.parse(JSON.stringify(feedbacks));
  return (
    <div className="">
      <FeedbacksCardList feedbacks={parsedFeedbacks} />
    </div>
  );
};

export default page;
