"use client";
import React, { useState } from "react";
import FeedbackCard from "../Feedback/FeedbackCard";
import Comments from "./Comments";
import AddComment from "../Forms/AddComment";

const CommentContainer = ({ feedback, suggestionID }: any) => {
  const [replyTo, setReplyTo] = useState({
    username: "",
    id: "",
  });
  console.log(replyTo);

  return (
    <div className=" flex flex-col gap-4 overflow-hidden">
      <FeedbackCard {...feedback} />
      <AddComment
        suggestionID={suggestionID}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
      />
      <div
        className="
      h-[calc(50vh-200px)] overflow-y-auto"
      >
        <Comments feedback={feedback} setReplyTo={setReplyTo} />
      </div>
    </div>
  );
};

export default CommentContainer;
