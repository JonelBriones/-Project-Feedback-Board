"use client";
import Image from "next/image";
import React from "react";
import userIcon from "@/public/images/user-images/user.png";
import ReplyCard from "./ReplyCard";
import { deleteComment } from "@/app/_actions/users/deleteComment";

const CommentCard = ({
  imageUrl,
  username,
  content,
  replies,
  _id,
  setReplyTo,
  owner,
  user,
  feedbackID,
}: any) => {
  return (
    <>
      {/* MOBILE */}
      <div className="flex md:hidden flex-col justify-between gap-4">
        <div className="flex-none flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex  place-items-center gap-4">
              <Image
                src={imageUrl ? imageUrl : userIcon}
                width={40}
                height={40}
                alt="image-anne"
                className="rounded-full"
              />
              <span className="font-bold text-[#3a4374]">{username}</span>
            </div>
            <div className="flex gap-4 font-semibold">
              {owner == user?.id && (
                <button
                  className="bg-[#e98888] rounded-xl p-3 md:p-3 md:px-5 text-white"
                  onClick={() => deleteComment(feedbackID, _id)}
                  type="button"
                >
                  Delete
                </button>
              )}
              <button
                className="text-[#4661e6]"
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
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-[#647196]">{content}</p>
          {replies.length > 0 && (
            <div className="flex gap-4">
              <div className="bg-[#647196] w-[1px] py-4 opacity-20" />
              <div className="flex-1">
                <div className="flex flex-col">
                  {replies?.map((reply: any) => (
                    <ReplyCard
                      reply={reply}
                      key={reply._id}
                      setReplyTo={setReplyTo}
                      feedbackID={feedbackID}
                      user={user}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:flex justify-between gap-8">
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
          <div className="flex justify-between place-items-center">
            <div className="flex flex-col">
              <span className="font-bold text-[#3a4374]">{username}</span>
            </div>
            <div className="flex gap-4 font-semibold">
              {owner == user?.id && (
                <button
                  className="bg-[#e98888] rounded-xl p-3 md:p-3 md:px-5 text-white"
                  onClick={() => deleteComment(feedbackID, _id)}
                  type="button"
                >
                  Delete
                </button>
              )}

              <button
                className="text-[#4661e6] md:p-3 md:px-5"
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
          </div>
          <p className="text-[#647196]">{content}</p>
          {replies?.map((reply: any) => (
            <ReplyCard
              reply={reply}
              key={reply._id}
              setReplyTo={setReplyTo}
              _id={reply._id}
              user={user}
              feedbackID={feedbackID}
              commentID={_id}
            />
          ))}
        </div>
      </div>
      {!replies && <div className="border my-4"></div>}
    </>
  );
};

export default CommentCard;
