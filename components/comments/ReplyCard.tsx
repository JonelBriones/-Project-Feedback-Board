import userIcon from "@/public/images/user-images/user.png";
import Image from "next/image";
import React from "react";

const ReplyCard = ({ reply, setReplyTo, id }: any) => {
  const { imageUrl, username, content, replyingToUsername } = reply;
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
          <button
            className="font-semibold text-[#4661e6]"
            onClick={() =>
              setReplyTo({
                username: username,
                id: id,
              })
            }
          >
            Reply
          </button>
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
