"use client";
import addCommentAction from "@/app/_actions/users/addCommentAction";
import { FaDeleteLeft } from "react-icons/fa6";

import React, { useActionState, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import redirectToSignIn from "@/app/_actions/users/redirectToSignIn";

const AddComment = ({ suggestionID, replyTo, setReplyTo }: any) => {
  const { data: session } = useSession();
  const [commentText, setComment] = useState("");

  let intialState = {
    comment: commentText,
    replyingTo: replyTo.id,
    suggestionID: suggestionID,
  };

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [commentForm, formAction] = useActionState(
    addCommentAction,
    intialState
  );
  const { data } = commentForm || {};

  useEffect(() => {
    if (data?.resetReply) {
      location.reload();
    }
  }, [data?.resetReply]);
  useEffect(() => {
    if (inputRef.current && replyTo.username) {
      inputRef?.current.focus();
      inputRef?.current.setSelectionRange(
        replyTo.username.length + 1,
        replyTo.username.length + 1
      );
    }
  }, [replyTo]);

  return (
    <div className="p-8 bg-white">
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

        <input
          type="text"
          className="p-4 bg-[#f7f7fd] hidden"
          name="replyingToUsername"
          id="replyingToUsername"
          defaultValue={replyTo.username}
        />
        <div className="relative flex flex-col gap-4">
          {replyTo.username && (
            <div
              className="flex gap-4 place-items-center cursor-pointer"
              onClick={() =>
                setReplyTo({
                  username: "",
                  id: "",
                })
              }
            >
              <span className="text-[#ad1fea] font-bold">
                @{replyTo.username?.toLowerCase()}
              </span>
              <FaDeleteLeft color="#000" size={20} />
            </div>
          )}
          <textarea
            ref={inputRef}
            name="comment"
            id="comment"
            className="w-full bg-[#f7f7fd] rounded-lg p-4"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            defaultValue={data?.comment}
            maxLength={250}
          />
        </div>
        <div className="flex justify-between place-items-center">
          <div className="flex flex-col">
            <span className="text-sm text-[#647196]">
              {250 - commentText.length} Characters left
            </span>
            {commentForm?.zodErrors?.comment && (
              <span className="text-red-500 text-sm">
                {commentForm?.zodErrors?.comment}
              </span>
            )}
          </div>
          <button
            type="submit"
            onClick={() => !session?.user?.id && redirectToSignIn()}
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
