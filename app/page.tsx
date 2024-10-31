"use client";

import FeedbackCard from "@/components/cards/FeedbackCard";
import Suggestions from "@/components/Suggestions";
import SuggestionsHeader from "@/components/SuggestionsHeader";
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
  const [feedbacks, setFeedbacks] = useState<any[]>([
    {
      id: 1,
      upvotes: [54, 92, 315, 42, 454],
      header: "Add tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      comments: ["1", "2"],
    },
    {
      id: 2,
      upvotes: [99, 96, 4, 2, 422, 2222, 2, 4, 24],
      header: "Add a dark theme option",
      detail:
        "It would help people with light sensitivities and who prefer dark mode.",
      category: "Feature",
      comments: ["1", "2", "3", "4"],
    },
    {
      id: 3,
      upvotes: [53, 95, 35, 2, 4, 4, 242, 24],
      header: "Q&A within the challenge hubs",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: ["1"],
    },
    {
      id: 4,
      upvotes: [53, 95, 35, 2, 4, 4],
      header:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum.",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: ["14"],
    },
    {
      id: 5,
      upvotes: [53, 95, 35, 2, 4, 42, 242, 1, 31, 313, 1, 13, 1],
      header: "Lorem consectetur adipisicing elit. Adipisci, laborum.",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: ["12", "2424", "22"],
    },
    {
      id: 6,
      upvotes: [53, 95, 35, 2, 4, 4],
      header: "Zit amet consectetur adipisicing elit. Adipisci, laborum.",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: ["1", "52"],
    },
  ]);

  const [user, setUser] = useState<any>({
    _id: 906,
    username: "jonel briones",
    upvoted: [],
  });

  function upvote(suggestionID: number) {
    const isAlreadyUpvoted = feedbacks.find(
      (feedback) =>
        feedback.id === suggestionID && feedback.upvotes.includes(user._id)
    );
    console.log(isAlreadyUpvoted);
    const updateUpvote = feedbacks.map((feedback) =>
      feedback.id === suggestionID
        ? { ...feedback, upvotes: [...feedback.upvotes, user._id] }
        : feedback
    );
    const updateRemoveUpvote = feedbacks.map((feedback) =>
      feedback.id === suggestionID
        ? {
            ...feedback,
            upvotes: feedback.upvotes.filter((id: any) => id !== user._id),
          }
        : feedback
    );
    console.log("updated:", updateUpvote);
    if (!isAlreadyUpvoted) {
      setFeedbacks(updateUpvote);
      setUser({ ...user, upvoted: [...user.upvoted, suggestionID] });
      console.log("adding upvote");
    } else {
      setFeedbacks(updateRemoveUpvote);
      setUser({
        ...user,
        upvoted: user.upvoted.filter((id: number) => id !== suggestionID),
      });
      console.log("removing upvote");
    }
  }

  switch (sortby) {
    case "Most Upvotes":
      feedbacks.sort(
        (current, next) => next.upvotes.length - current.upvotes.length
      );
      break;
    case "Least Upvotes":
      feedbacks.sort(
        (current, next) => current.upvotes.length - next.upvotes.length
      );
      break;
    case "Most Comments":
      feedbacks.sort(
        (current, next) => next.comments.length - current.comments.length
      );
      break;
    case "Least Comments":
      feedbacks.sort(
        (current, next) => current.comments.length - next.comments.length
      );
      break;
  }

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
        <SuggestionsHeader
          setSortbyOptions={setSortbyOptions}
          showSortbyOptions={showSortbyOptions}
          sortby={sortby}
          setSortby={setSortby}
        />
        <Suggestions feedbacks={feedbacks} upvote={upvote} user={user} />
      </div>
    </div>
  );
}
