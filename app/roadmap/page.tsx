"use server";
import React, { useState } from "react";
import Roadmap from "@/components/Roadmap/Roadmap";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";

const page = async () => {
  await connectDB();

  const feedbackAPI = await Feedback.find({}).lean();
  const currentUserAPI = await User.find({}).lean();

  return (
    <div className="container max-w-screen-lg">
      <Roadmap
        feedbacksAPI={JSON.parse(JSON.stringify(feedbackAPI))}
        currentUserAPI={JSON.parse(JSON.stringify(currentUserAPI[0]))}
      />
    </div>
  );
};

export default page;
