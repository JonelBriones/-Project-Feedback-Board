import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import React from "react";
import Dashboard from "./Dashboard";

const Home = async () => {
  await connectDB();
  const feedbacksAPI = await Feedback.find({}).lean();
  const currentUserAPI = await User.find({}).lean();
  console.log("feedbacks", feedbacksAPI);
  console.log("users", currentUserAPI);
  return (
    <>
      <Dashboard
        feedbacksAPI={JSON.parse(JSON.stringify(feedbacksAPI))}
        currentUserAPI={JSON.parse(JSON.stringify(currentUserAPI))}
      />
    </>
  );
};

export default Home;
