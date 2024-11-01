"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { productRequests as productdata } from "@/data/feedbacks.json";
import { currentUser as userdata } from "@/data/user.json";

const page = () => {
  const [feedbacks, setFeedbacks] = useState<any[]>(productdata);
  const [user, setUser] = useState<any>(userdata);

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

  function renderStatus(status: string, description: string, color: string) {
    let statusLength = feedbacks.filter(
      (feedback) => feedback.status == status.toLowerCase()
    );
    console.log(statusLength);
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold text-lg">
            {status} ({statusLength.length})
          </h4>
          <p className="text-[#647196]">{description}</p>
        </div>
        {feedbacks.map(
          (feedback: any) =>
            feedback.status.toLowerCase() == status.toLowerCase() && (
              <div
                key={feedback.id}
                className={`flex flex-col bg-white p-6 gap-2 rounded-lg border-t-[4px] border-t-[#${color}]`}
              >
                <span className="flex gap-4 place-items-center">
                  <div className={`size-2 bg-[#${color}] rounded-full`} />
                  Planned
                </span>
                <h1 className="font-bold text-lg">{feedback.title}</h1>
                <p className="text-[#647196]">{feedback.description}</p>
                <button className="w-fit px-4 py-2 rounded-xl font-semibold bg-[#f2f4ff] text-[#4661e6]">
                  {feedback.category}
                </button>
                <div className="flex justify-between">
                  <button
                    className={`flex gap-3 place-items-center justify-center rounded-xl bg-[#f2f4fe] px-3 py-2 text-sm ${
                      feedback.upvotes.includes(user._id)
                        ? "bg-[rgb(70,97,230)] text-white"
                        : "text-[#3A4374] hover:bg-[#cfd7ff]"
                    }`}
                    onClick={() => upvote(feedback.id)}
                  >
                    <svg
                      width="10"
                      height="7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6l4-4 4 4"
                        stroke={
                          feedback.upvotes.includes(user._id)
                            ? "#fff"
                            : "#4661e6"
                        }
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="font-bold">{feedback.upvotes.length}</span>
                  </button>
                  <div className="flex gap-4 place-items-center">
                    <Image
                      src={"/images/shared/icon-comments.svg"}
                      width={18}
                      height={16}
                      alt="icon-comment"
                    />
                    <span>
                      {feedback.comments.length
                        ? feedback.comments.length
                        : "0"}
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex justify-between place-items-center rounded-lg p-6 text-white bg-[#373F68] text-sm">
        <div className="flex flex-col gap-2">
          <Link href={"/"} className="flex place-items-center gap-4">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L2 5l4-4"
                stroke="#cdd2ee"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            <h2 className="font-bold text-sm hover:underline">Go Back</h2>
          </Link>
          <h1 className="font-bold text-2xl">Roadmap</h1>
        </div>
        <Link
          href={"/create-feedback"}
          className="px-6 py-4 bg-[#ad1fea] rounded-lg hover:bg-[#c75af6]"
        >
          + Add Feedback
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          {renderStatus("Planned", "Ideas prioritized for research", "f49f85")}
          {renderStatus("In-progress", "Currently being developed", "ad1fea")}
          {renderStatus("Live", "Released features", "62bcfa")}
        </div>
      </div>
    </div>
  );
};

export default page;
