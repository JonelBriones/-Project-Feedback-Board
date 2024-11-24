"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";

async function addCommentAction(suggestionID: string, comment: string) {
  await connectDB();
  const sessionUser = await auth();

  const suggestion = await Feedback.findById(suggestionID);

  if (!sessionUser || !sessionUser?.user?.id) {
    throw new Error("User must be signed in");
  }

  let error;
  let message;
  const newComment = {
    content: comment,
    owner: sessionUser.user.id,
    imageUrl: sessionUser.user.image,
    username: sessionUser.user.name,
  };

  if (!comment) {
    message = "Cannot be blank";
  } else {
    suggestion.comments.push(newComment);
    await suggestion.save();
  }

  revalidatePath("/", "layout");
  console.log("ERROR:", error);
  return {
    message,
  };
}
export default addCommentAction;
