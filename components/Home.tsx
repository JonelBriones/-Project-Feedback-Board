import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Home = async () => {
  await connectDB();
  const feedbacksAPI = await Feedback.find({}).lean();
  const currentUserAPI = await User.find({}).lean();

  return (
    <div className="flex flex-col">
      <Navbar />
      <Dashboard
        feedbacksAPI={JSON.parse(JSON.stringify(feedbacksAPI))}
        currentUserAPI={JSON.parse(JSON.stringify(currentUserAPI))}
      />
    </div>
  );
};

export default Home;
