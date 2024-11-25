"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import getSessionUser from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";
async function addCommentAction(
  prevState: any,
  formData: FormData
): Promise<any> {
  await connectDB();
  const sessionUser = await getSessionUser();
  console.log("PREV STATE", prevState);
  // console.log("SUGGESTION ID", suggestionID);
  console.log("FORM DATA", formData);

  const suggestion = await Feedback.findById(formData.get("suggestionID"));

  if (!sessionUser || !sessionUser?.user?.id) {
    throw new Error("User must be signed in");
  }

  const unvalidatedComment = {
    comment: formData.get("comment"),
    replyingTo: formData.get("replyingTo"),
  };
  const commentSchema = z.object({
    comment: z.string().min(5, "Must be 5 or more characters long"),
    replyingTo: z.string(),
  });

  const validatedComment = commentSchema.safeParse(unvalidatedComment);

  const newComment = {
    content: formData.get("comment"),
    replyingTo: formData.get("replyingTo") || "",
    owner: sessionUser.user.id,
    imageUrl: sessionUser.user.image,
    username: sessionUser.user.name,
  };

  // REQUIRED TO COMMENT - COMMENT CONTENT & SUGGESTION ID
  // OPTIONAL - REPLYING TO ID

  if (!validatedComment.success) {
    console.log("PREV STATE", prevState);
    return {
      ...prevState,
      data: { ...prevState?.data, ...unvalidatedComment },
      zodErrors: validatedComment.error.flatten().fieldErrors,
    };
  } else if (newComment.replyingTo) {
    console.log("REPLYING TO ID", newComment.replyingTo);
    suggestion.comments.map((comment) =>
      comment._id == newComment.replyingTo
        ? { ...comment, replies: comment.replies.push(newComment) }
        : comment
    );

    // console.log(result);
    // suggestion.comments.push(newComment);
    await suggestion.save();
  } else {
    console.log("NEW COMMENT", newComment);
    suggestion.comments.push(newComment);
    await suggestion.save();
  }
  revalidatePath("/", "layout");
}
export default addCommentAction;
