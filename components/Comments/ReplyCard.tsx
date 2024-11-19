import Image from "next/image";
import React from "react";

const ReplyCard = ({ reply }: any) => {
  const { imageUrl, username, content, replies } = reply;
  return (
    <div className="flex justify-between gap-8">
      <div className="flex-none">
        <Image
          src={imageUrl ? imageUrl : userIcon}
          width={40}
          height={40}
          alt="image-anne"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-[#3a4374]">{username}</span>
              <span className="text-[#647196]">@{username}</span>
            </div>
            <button className="font-semibold text-[#4661e6]">Reply</button>
          </div>
          <p className="text-[#647196] my-4">{content}</p>
        </div>
        {replies?.map((reply) => (
          <ReplyCard reply={reply} key={reply._id} />
        ))}
      </div>
    </div>
  );
};

export default ReplyCard;
