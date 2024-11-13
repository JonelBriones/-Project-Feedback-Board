import Suggestions from "@/components/SuggestionsCardList";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import React from "react";

const page = async () => {
  await connectDB();
  const feedbacks = await Feedback.find({}).lean();
  const parsedFeedbacks = JSON.parse(JSON.stringify(feedbacks));
  return <Suggestions feedbacks={parsedFeedbacks} />;
};

export default page;
