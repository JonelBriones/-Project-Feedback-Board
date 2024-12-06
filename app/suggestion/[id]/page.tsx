"use server";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import GoBack from "@/components/buttons/GoBack";
import LinkButton from "@/components/buttons/LinkButton";
import CommentContainer from "@/components/comments/CommentContainer";
import NoAccess from "@/components/NoAccess";
import Feedback from "@/models/Feedback";
import { Session } from "next-auth";
import connectDB from "@/config/database";

const page = async ({ params }: any) => {
  const { id } = await params;
  await connectDB();
  if (id.length != 24) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }
  const result = await Feedback.findById(id).lean();

  if (!result) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }
  const suggestionById = JSON.parse(JSON.stringify(result));

  return (
    <div className="h-screen md:h-[calc(100vh-100px)] w-full md:container mt-0 overflow-y-auto">
      <CommentContainer feedback={suggestionById} suggestionID={id} />
    </div>
  );
};

export default page;
