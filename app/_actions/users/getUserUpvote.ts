"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";

async function getUpvoteStatusAction(suggestionID: string) {
  await connectDB();
  const suggestion = await Feedback.findById(suggestionID);
  const session = await auth();

  if (!session?.user?.id || !session) {
    throw new Error("User ID is requied");
  }

  const user = await User.findById(session.user.id);

  let isLiked = user.upvotes.includes(suggestion?._id);
  let error;

  return { isLiked, error };
}
export default getUpvoteStatusAction;
