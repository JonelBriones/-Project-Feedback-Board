"use client";
import Image from "next/image";
import React from "react";
import ReplyCard from "./ReplyCard";
import userIcon from "@/public/images/user-images/user.png";
const CommentCard = ({
  imageUrl,
  username,
  content,
  replies,
  owner,
  replyingTo,
  setReplyTo,
}: any) => {
  return (
    <>
      <div className="flex justify-between gap-8">
        <div className="flex-none">
          <Image
            src={imageUrl ? imageUrl : userIcon}
            width={40}
            height={40}
            alt="image-anne"
            className="rounded-full"
          />
          <div className="flex place-items-center justify-center h-full">
            <div className="h-[80%] bg-[#647196] w-[1px] py-4" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-[#3a4374]">{username}</span>
              <span className="text-[#647196]">@{username}</span>
            </div>
            <button
              className="font-semibold text-[#4661e6]"
              onClick={() => setReplyTo(username)}
            >
              Reply
            </button>
          </div>
          <p className="text-[#647196]">{content}</p>
          {replies?.map((reply: any) => (
            <ReplyCard reply={reply} key={reply.owner} />
          ))}
        </div>
      </div>

      {!replies && <div className="border my-4"></div>}
      {/* <div>{renderCommentCard()}</div> */}
    </>
  );
};

export default CommentCard;
