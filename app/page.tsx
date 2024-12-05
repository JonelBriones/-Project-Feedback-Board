import Dashboard from "@/components/Dashboard";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import React from "react";
import { auth } from "./api/auth/[...nextauth]/auth";

const page = async () => {
  await connectDB();
  const feedbacksAPI = await Feedback.find({}).lean();
  const currentUserAPI = await User.find({}).lean();

  return (
    <div className="md:container h-[calc(100vh-200px)]">
      <Dashboard
        feedbacksAPI={JSON.parse(JSON.stringify(feedbacksAPI))}
        currentUserAPI={JSON.parse(JSON.stringify(currentUserAPI))}
      />
    </div>
  );
};

export default page;
