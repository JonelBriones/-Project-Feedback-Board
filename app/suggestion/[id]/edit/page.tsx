"use server";
import EditFeedback from "@/components/forms/EditFeedback";
import NoAccess from "@/components/NoAccess";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { Feedback as FeedbackT } from "@/types";
import { convertToSerializableObject } from "@/utils/convertToObject";
import React from "react";
import mongoose from "mongoose";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
const page = async ({ params }: any) => {
  const { id } = await params;
  await connectDB();

  if (id.length != 24) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }

  const suggestionById = await Feedback.findById(id);

  if (!suggestionById) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }

  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    return <NoAccess url={"/"} id={id} text={"User must be signed in."} />;
  }
  if (sessionUser?.user?.id != suggestionById) {
    return (
      <NoAccess
        url={"/"}
        id={id}
        text={"User does not have access to this page."}
      />
    );
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }
  const result = await Feedback.findById(id).lean();

  if (!result) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found.."} />;
  }
  const feedback: FeedbackT | null = convertToSerializableObject(result);

  if (!feedback?._id || !feedback) {
    throw new Error("Feedback not found");
  }

  return (
    <div>
      <EditFeedback feedback={JSON.parse(JSON.stringify(feedback))} />
    </div>
  );
};

export default page;
