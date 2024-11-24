"use client";
import React, { useState } from "react";

import { Feedback } from "@/types";
import FeedbacksHeader from "./Feedback/FeedbacksHeader";
import FeedbacksCardList from "./Feedback/FeedbacksCardList";
import Navbar from "./Navbar/Navbar";

const Dashboard = ({ feedbacksAPI }: any) => {
  const [toggleCategory, setToggleCategory] = useState("All");
  const [option, setSortby] = useState("Most Upvotes");
  const [showOptions, setSortbyOptions] = useState(false);

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const feedbacks = feedbacksAPI;

  switch (option) {
    case "Most Upvotes":
      feedbacks.sort(
        (current: Feedback, next: Feedback) =>
          next.upvotes.length - current.upvotes.length
      );
      break;
    case "Least Upvotes":
      feedbacks.sort(
        (current: Feedback, next: Feedback) =>
          current.upvotes.length - next.upvotes.length
      );
      break;
    case "Most Comments":
      feedbacks.sort((current: Feedback, next: Feedback) => {
        return next.comments.length - current.comments.length;
      });
      break;
    case "Least Comments":
      feedbacks.sort((current: Feedback, next: Feedback) => {
        return current.comments.length - next.comments.length;
      });
      break;
  }
  return (
    <div className="flex flex-col md:flex-row md:gap-6">
      <Navbar
        setToggleCategory={setToggleCategory}
        categories={categories}
        toggleCategory={toggleCategory}
      />
      <div className="flex flex-col gap-4">
        <FeedbacksHeader
          option={option}
          setOption={setSortby}
          showOptions={showOptions}
          setSortbyOptions={setSortbyOptions}
          feedbacks={feedbacks}
        />
        <FeedbacksCardList category={toggleCategory} feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default Dashboard;
