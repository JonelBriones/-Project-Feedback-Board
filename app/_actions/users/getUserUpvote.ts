"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import redirectToSignIn from "./redirectToSignIn";

async function getUpvoteStatusAction(suggestionID: string) {
  await connectDB();
  const suggestion = await Feedback.findById(suggestionID);
  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }

  const user = await User.findById(sessionUser.user.id);

  let isLiked = user.upvotes.includes(suggestion?._id);
  let error;

  return { isLiked, error };
}
export default getUpvoteStatusAction;
