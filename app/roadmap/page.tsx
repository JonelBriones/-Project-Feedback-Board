"use server";
import React from "react";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import Roadmap from "@/components/roadmap/Roadmap";

const page = async () => {
  await connectDB();

  const feedbackAPI = await Feedback.find({}).lean();

  return (
    <div className="md:container md:max-w-screen-lg">
      <Roadmap feedbacksAPI={JSON.parse(JSON.stringify(feedbackAPI))} />
    </div>
  );
};

export default page;
