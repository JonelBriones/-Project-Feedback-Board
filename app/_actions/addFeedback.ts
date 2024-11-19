"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import getSessionUser from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addFeedback = async (formData: any) => {
  await connectDB();
  const sessionUser = await getSessionUser();

  const suggestionData = {
    owner: sessionUser?.userId,
    imageUrl: sessionUser?.user.image,
    email: sessionUser?.user.email,
    name: sessionUser?.user.name,
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    status: "suggestion",
  };

  const newSuggestion = new Feedback(suggestionData);
  await newSuggestion.save();

  revalidatePath("/", "layout");
  redirect(`/suggestion/${newSuggestion._id}`);
};
