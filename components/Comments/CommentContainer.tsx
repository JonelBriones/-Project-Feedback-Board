"use client";
import React, { useState } from "react";
import FeedbackCard from "../Feedback/FeedbackCard";
import Comments from "./Comments";
import AddComment from "../Forms/AddComment";

const CommentContainer = ({ feedback, suggestionID }: any) => {
  const [replyTo, setReplyTo] = useState("");
  console.log(replyTo);

  return (
    <>
      <FeedbackCard {...feedback} />
      <Comments feedback={feedback} setReplyTo={setReplyTo} />
      <AddComment
        suggestionID={suggestionID}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
      />
    </>
  );
};

export default CommentContainer;
