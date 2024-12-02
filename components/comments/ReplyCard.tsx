import userIcon from "@/public/images/user-images/user.png";
import { Reply } from "@/types";
import Image from "next/image";
import React from "react";

const ReplyCard = ({ reply, setReplyTo, id }: any) => {
  const { imageUrl, username, content, replies, replyingToUsername, _id } =
    reply;

  return (
    <div className="flex justify-between gap-8">
      <div>
        <Image
          src={imageUrl ? imageUrl : userIcon}
          width={40}
          height={40}
          alt="image-anne"
          className="rounded-full"
        />
      </div>
      <div className="flex-grow flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-[#3a4374]">{username}</span>
              <span className="text-[#647196]">@{username}</span>
            </div>
            <button
              className="font-semibold text-[#4661e6]"
              onClick={() =>
                setReplyTo({
                  username,
                  id,
                })
              }
            >
              Reply
            </button>
          </div>
          <p className="text-[#647196] my-4">
            <span className="text-[#ad1fea] font-bold">
              @{replyingToUsername?.toLowerCase()}
            </span>{" "}
            {content}
          </p>
        </div>
        {replies?.map((reply: Reply) => (
          <ReplyCard reply={reply} key={reply._id} />
        ))}
      </div>
    </div>
  );
};

export default ReplyCard;
