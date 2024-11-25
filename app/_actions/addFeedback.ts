"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import getSessionUser from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FeedbackSchema, feedbackSchema } from "../_schemas/feedback";
import { FeedbackFormState } from "../_types/feedback";
// FeedbackFormState<FeedbackSchema>,
export const addFeedback = async (
  prevState: any,
  formData: FormData
): Promise<FeedbackFormState<FeedbackSchema>> => {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser?.userId || !sessionUser) {
    throw new Error("User must be logged in.");
  }

  const unvalidatedFeedback = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
  };

  const validated = feedbackSchema.safeParse(unvalidatedFeedback);

  if (!validated.success) {
    return {
      ...prevState,
      data: { ...prevState.data, ...unvalidatedFeedback },
      zodErrors: validated.error.flatten().fieldErrors,
    };
  } else {
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

    return {
      successMsg: "Feedback added!",
      data: JSON.parse(JSON.stringify(newSuggestion._id)),
    };
  }
};
