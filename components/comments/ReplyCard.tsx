import { deleteReply } from "@/app/_actions/users/deleteReply";
import userIcon from "@/public/images/user-images/user.png";
import Image from "next/image";
import React from "react";

const ReplyCard = ({
  _id,
  reply,
  setReplyTo,
  user,
  feedbackID,
  commentID,
}: any) => {
  const { imageUrl, username, content, replyingToUsername, owner } = reply;
  console.log("feedbackid", feedbackID);
  return (
    <div className="flex justify-between gap-4 flex-col">
      <div className="flex-none flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex place-items-center gap-4">
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
                onClick={() => deleteReply(feedbackID, commentID, _id)}
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
                  id: commentID,
                })
              }
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#647196] my-4">
        <span className="text-[#ad1fea] font-bold">
          @{replyingToUsername?.toLowerCase()}
        </span>{" "}
        {content}
      </p>
    </div>
  );
};

export default ReplyCard;
