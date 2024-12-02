"use server";
import EditFeedback from "@/components/Forms/EditFeedback";
import NoAccess from "@/components/NoAccess";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { Feedback as FeedbackT } from "@/types";
import getSessionUser from "@/utils/getSessionUser";

import React from "react";

const page = async ({ params }: any) => {
  const { id } = await params;
  await connectDB();
  const feedback: FeedbackT | null = await Feedback.findById(id);

  if (!feedback) {
    throw new Error("Feedback not found");
  }

  const sessionUser = await getSessionUser();

  return (
    <div>
      {sessionUser?.userId !== feedback.owner ? (
        <NoAccess id={id} />
      ) : (
        <EditFeedback feedback={JSON.parse(JSON.stringify(feedback))} />
      )}
    </div>
  );
};

export default page;
