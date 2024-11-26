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
  _id,
  setReplyTo,
}: any) => {
  return (
    <>
      <div className="flex justify-between gap-8">
        <div className="flex-none flex flex-col gap-4">
          <Image
            src={imageUrl ? imageUrl : userIcon}
            width={40}
            height={40}
            alt="image-anne"
            className="rounded-full"
          />
          {replies.length > 0 && (
            <div className="flex justify-center h-full">
              <div className=" h-[calc(100%-80px)] bg-[#647196] w-[1px] py-4 opacity-10 " />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-[#3a4374]">{username}</span>
              <span className="text-[#647196]">@{username}</span>
            </div>
            <button
              className="font-semibold text-[#4661e6]"
              onClick={() =>
                setReplyTo({
                  username: username,
                  id: _id,
                })
              }
            >
              Reply
            </button>
          </div>
          <p className="text-[#647196]">{content}</p>
          {replies?.map((reply: any) => (
            <ReplyCard
              reply={reply}
              key={reply._id}
              setReplyTo={setReplyTo}
              id={_id}
            />
          ))}
        </div>
      </div>

      {!replies && <div className="border my-4"></div>}
    </>
  );
};

export default CommentCard;
