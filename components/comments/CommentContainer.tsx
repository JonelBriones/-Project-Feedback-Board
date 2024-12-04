"use client";
import React, { useState } from "react";
import FeedbackCard from "../feedback/FeedbackCard";

import AddComment from "../forms/AddComment";
import Comments from "./Comments";

const CommentContainer = ({ feedback, suggestionID }: any) => {
  const [replyTo, setReplyTo] = useState({
    username: "",
    id: "",
  });

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
      h-[calc(50vh-100px)] overflow-y-auto"
      >
        <Comments feedback={feedback} setReplyTo={setReplyTo} />
      </div>
    </div>
  );
};

export default CommentContainer;
