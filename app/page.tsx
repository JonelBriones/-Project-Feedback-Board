"use client";

import FeedbackCard from "@/components/cards/FeedbackCard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [toggleCategory, setToggleCategory] = useState("All");
  const [sortby, setSortby] = useState("Most Upvotes");
  const [showSortbyOptions, setSortbyOptions] = useState(false);
  const [categories, setCategories] = useState([
    "All",
    "Ul",
    "UX",
    "Enchancement",
    "Bug",
    "Feature",
  ]);
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      upvotes: 112,
      header: "Add tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      comments: ["1", "2"],
    },
    {
      id: 2,
      upvotes: 99,
      header: "Add a dark theme option",
      detail:
        "It would help people with light sensitivities and who prefer dark mode.",
      category: "Feature",
      comments: ["1", "2", "3", "4"],
    },
    {
      id: 3,
      upvotes: 65,
      header: "Q&A within the challenge hubs",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: ["1"],
    },
  ]);
  return (
    <div className="container flex gap-6 ">
      <div className="w-[255px] flex flex-col gap-6">
        <div className="h-[137px] flex flex-col justify-end bg-white rounded-lg p-4 text-white bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70]">
          <h4 className="font-bold">Frontend Mentor</h4>
          <p className="text-sm opacity-85">Feedback Board</p>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex gap-2 text-xs text-white flex-wrap">
            {categories.map((category: any) => (
              <button
                key={category}
                className={`px-3 py-2 rounded-lg font-semibold ${
                  toggleCategory === category
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
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
            <Link href={"/"} className="text-sm underline pb-2 text-[#4661e6]">
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
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex justify-between place-items-center rounded-lg p-4 text-white bg-[#373F68] font-bold text-sm">
          <div className="flex gap-8 ">
            <div className="flex gap-4 place-items-center">
              <Image
                src={"/images/suggestions/icon-suggestions.svg"}
                height={24}
                width={23}
                alt=""
              />
              <span className="text-lg">6 Suggestions</span>
            </div>
            <div className="flex place-items-center relative">
              <button onClick={() => setSortbyOptions(!showSortbyOptions)}>
                Sort by : {sortby}
              </button>
              {showSortbyOptions && (
                <div className="absolute w-[255px] left-0 top-[70px] rounded-lg bg-white shadow-lg overflow-hidden  ">
                  <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 ">
                    <button
                      className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                      onClick={() => {
                        setSortby("Most Upvotes"), setSortbyOptions(false);
                      }}
                    >
                      <span>Most Upvotes</span>
                      {sortby === "Most Upvotes" && (
                        <Image
                          src={"/images/shared/icon-check.svg"}
                          width={11.03}
                          height={7.5}
                          alt="icon-check"
                        />
                      )}
                    </button>
                    <button
                      className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                      onClick={() => {
                        setSortby("Least Upvotes"), setSortbyOptions(false);
                      }}
                    >
                      <span>Least Upvotes</span>
                      {sortby === "Least Upvotes" && (
                        <Image
                          src={"/images/shared/icon-check.svg"}
                          width={11.03}
                          height={7.5}
                          alt="icon-check"
                        />
                      )}
                    </button>
                    <button
                      className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                      onClick={() => {
                        setSortby("Most Comments"), setSortbyOptions(false);
                      }}
                    >
                      <span>Most Comments</span>
                      {sortby === "Most Comments" && (
                        <Image
                          src={"/images/shared/icon-check.svg"}
                          width={11.03}
                          height={7.5}
                          alt="icon-check"
                        />
                      )}
                    </button>
                    <button
                      className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                      onClick={() => {
                        setSortby("Least Comments"), setSortbyOptions(false);
                      }}
                    >
                      <span>Least Comments</span>
                      {sortby === "Least Comments" && (
                        <Image
                          src={"/images/shared/icon-check.svg"}
                          width={11.03}
                          height={7.5}
                          alt="icon-check"
                        />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <button className="px-6 py-4 bg-[#ad1fea] rounded-lg">
              + Add Feedback
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </div>
  );
}
