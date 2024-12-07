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

  const suggestionResult = await Feedback.findById(id).lean();

  if (!suggestionResult) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }
  const suggestionById = JSON.parse(JSON.stringify(suggestionResult));

  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    return <NoAccess url={"/"} id={id} text={"User must be signed in."} />;
  }
  if (sessionUser?.user?.id != suggestionById?.owner) {
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

  return (
    <div className="h-screen overflow-auto">
      <EditFeedback feedback={JSON.parse(JSON.stringify(suggestionById))} />
    </div>
  );
};

export default page;
