"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteSuggestion = async (suggestionID: any) => {
  console.log("deleting...");
  await connectDB();
  const suggestionById = await Feedback.findById(suggestionID);
  console.log(suggestionById);

  await Feedback.findByIdAndDelete(suggestionID);

  revalidatePath("/", "layout");
  redirect(`/`);
};
