"use client";
import getUpvoteStatusAction from "@/app/_actions/users/getUserUpvote";
import redirectToSignIn from "@/app/_actions/users/redirectToSignIn";
import upvoteAction from "@/app/_actions/users/upvoteAction";
import LoadingPage from "@/app/loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RoadmapSuggestionCard = ({
  _id,
  title,
  upvotes,
  comments,
  description,
  category,
  color,
  status,
}: any) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [upvoteLength, setUpvotedLength] = useState(upvotes?.length);
  const upvoteOnClick = async () => {
    setLoading(true);
    if (!session) {
      console.log("user needs to sign in");
      redirectToSignIn();
    }
    upvoteAction(_id).then((res) => {
      setIsLiked(res?.isLiked);
      setUpvotedLength(res?.upvoteCount);
      setLoading(false);
    });
  };
  useEffect(() => {
    setIsLiked(upvotes?.includes(session?.user?.id));
    if (!session?.user?.id) {
      setLoading(false);
      return;
    }
    getUpvoteStatusAction(_id).then((res) => {
      if (res?.isLiked) setIsLiked(res?.isLiked);
      setLoading(false);
    });
  }, [upvotes]);

  return (
    <div
      key={_id}
      className={`flex flex-col bg-white p-6 gap-2 rounded-lg border-t-[4px] border-t-[${color}] `}
    >
      <span className="flex gap-4 place-items-center">
        <div
          className={`size-2 bg-[${color ? color : "#ad1fea"}] rounded-full`}
        />
        {status}
      </span>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-[#647196]">{description}</p>
      <button className="w-fit px-4 py-2 rounded-xl font-semibold bg-[#f2f4ff] text-[#4661e6]">
        {category}
      </button>
      <div className="flex justify-between">
        {loading ? (
          <div className="flex justify-start px-4 py-2">
            <LoadingPage loading={loading} color={"#ad1fea"} size={20} />
          </div>
        ) : (
          <button
            className={`flex gap-3 place-items-center justify-center rounded-xl bg-[#f2f4fe] px-3 py-2 text-sm ${
              isLiked
                ? "bg-[rgb(70,97,230)] text-white"
                : "text-[#3A4374] hover:bg-[#868893]"
            }`}
            onClick={upvoteOnClick}
          >
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 6l4-4 4 4"
                stroke={isLiked ? "#fff" : "#4661e6"}
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            <span className="font-bold">{upvoteLength}</span>
          </button>
        )}

        <div className="flex gap-4 place-items-center">
          <Image
            src={"/images/shared/icon-comments.svg"}
            width={18}
            height={16}
            alt="icon-comment"
          />
          <span>{comments?.length ? comments?.length : "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSuggestionCard;
