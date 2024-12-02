"use client";
import React from "react";
import CommentCard from "./CommentCard";

const Comments = ({ feedback, setReplyTo }: any) => {
  console.log(feedback.comments);
  const { comments } = feedback;
  const newestOrder = [...comments].reverse();
  return (
    <div className="p-8 flex flex-col gap-4 bg-white rounded-lg">
      <h1>{feedback.comments.length} Comments</h1>
      {/* COMMENT CARD */}

      {newestOrder.map((comment: any) => (
        <CommentCard
          key={comment._id}
          {...comment}
          setReplyTo={setReplyTo}
          replyingTo={comment.replyingTo}
        />
      ))}
    </div>
  );
};

export default Comments;
