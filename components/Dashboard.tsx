"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Feedback } from "@/types";
import FeedbacksHeader from "./Feedback/FeedbacksHeader";
import FeedbacksCardList from "./Feedback/FeedbacksCardList";

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
    <div className="container flex gap-6">
      <div className="w-[255px] flex flex-col gap-4">
        <div className="h-[137px] flex flex-col justify-end bg-white rounded-lg p-4 text-white bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70]">
          <h4 className="font-bold">Frontend Mentor</h4>
          <p className="text-sm opacity-85">Feedback Board</p>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex gap-2 text-xs text-white flex-wrap">
            {categories.map((category: any) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-xl font-semibold ${
                  toggleCategory === category
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4ff] text-[#4661e6] hover:bg-[#cfd7ff]"
                }`}
                onClick={() => setToggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
          <div className="flex justify-between">
            <h4 className="font-bold">Roadmap</h4>
            <Link
              href={"/roadmap"}
              className="text-sm underline pb-2 text-[#4661e6]"
            >
              View
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#f49f85]" />
              <span className="opacity-65">Planned</span>
            </div>
            <span className="font-bold">2</span>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#ad1fea]" />
              <span className="opacity-65">In-Progress</span>
            </div>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#62bcfa]" />
              <span className="opacity-65">Live</span>
            </div>
            <span className="font-bold">1</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1 w-[100vh]">
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
