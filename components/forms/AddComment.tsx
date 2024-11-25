"use client";
import addCommentAction from "@/app/_actions/users/addCommentAction";
import redirectToSignIn from "@/app/_actions/users/redirectToSignIn";

import { useSession } from "next-auth/react";
import { useParams, usePathname } from "next/navigation";
import React, { useActionState, useEffect, useRef, useState } from "react";

const AddComment = ({ suggestionID, replyTo, setReplyTo }: any) => {
  console.log(replyTo);
  const { data: session } = useSession();
  const [commentText, setComment] = useState("");

  let intialState = {
    comment: commentText,
    replyingTo: replyTo.id,
    suggestionID: suggestionID,
  };
  const [message, setMessage] = useState("");

  const addCommentActionWithId = addCommentAction.bind(
    null,
    intialState,
    suggestionID
  );

  const [commentForm, formAction] = useActionState(
    addCommentAction,
    intialState
  );

  const { comment, replyingTo, data } = commentForm || {};
  console.log(commentForm);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current && replyTo.username) {
      inputRef?.current.focus();
      inputRef?.current.setSelectionRange(
        replyTo.username.length + 1,
        replyTo.username.length + 1
      );
    }
  }, [replyTo.username]);

  return (
    <div className="p-8 bg-white rounded-lg">
      <form action={formAction} className="flex flex-col gap-2">
        <label htmlFor="comment" className="font-bold text-black">
          Add Comment
        </label>
        <input
          type="text"
          name="suggestionID"
          id="suggestionID"
          className="hidden"
          defaultValue={suggestionID}
        />
        <input
          type="text"
          name="replyingTo"
          id="replyingTo"
          className="hidden"
          defaultValue={replyTo.id}
        />

        <div className="relative">
          {replyTo.username ? (
            <>
              <label htmlFor="replyingTo">@{replyTo.username}</label>
              <input
                type="text"
                className="p-4 bg-[#f7f7fd] hidden"
                name="replyingTo"
                id="replyingTo"
                defaultValue={replyTo.username}
              />
              <textarea
                ref={inputRef}
                name="comment"
                id="comment"
                className="w-full bg-[#f7f7fd] rounded-lg p-4"
                placeholder="Add a reply..."
                onChange={(e) => setComment(e.target.value)}
                // defaultValue={replyTo.username ? "@" + replyTo.username : ""}
                defaultValue={data?.comment}
              />
            </>
          ) : (
            <textarea
              ref={inputRef}
              name="comment"
              id="comment"
              className="w-full bg-[#f7f7fd] rounded-lg p-4"
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value)}
              defaultValue={data?.comment}
            />
          )}
          {commentForm?.zodErrors?.comment && (
            <span>{commentForm?.zodErrors?.comment}</span>
          )}
          <span className="absolute -bottom-4 left-0 text-sm text-[#647196]">
            {250 - commentText.length} Characters left
          </span>
        </div>
        <div className="flex justify-between place-items-center">
          <span className=" text-[#647196]">{message}</span>

          <button
            type="submit"
            className="bg-[#ad1fea] p-4 px-8 rounded-xl font-bold text-white"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
