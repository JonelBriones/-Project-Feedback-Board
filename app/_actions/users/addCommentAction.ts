"use server";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import redirectToSignIn from "./redirectToSignIn";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
async function addCommentAction(
  prevState: any,
  formData: FormData
): Promise<any> {
  await connectDB();

  const suggestion = await Feedback.findById(formData.get("suggestionID"));
  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
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
    replyingToUsername: formData.get("replyingToUsername") || "",
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
    suggestion.comments.map((comment: any) =>
      comment._id == newComment.replyingTo
        ? { ...comment, replies: comment.replies.push(newComment) }
        : comment
    );
    await suggestion.save();
    revalidatePath("/", "layout");
    return {
      data: {
        ...prevState?.data,
        resetReply: true,
      },
    };
  } else {
    suggestion.comments.push(newComment);
    await suggestion.save();
    revalidatePath("/", "layout");
    return {
      successMsg: "Comment added!",
    };
  }
}
export default addCommentAction;
