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

  const session = await auth();

  return (
    <div className="md:container h-[calc(100vh-100px)] flex flex-col gap-4 overflow-auto mt-10 md:mt-0">
      <div className="flex place-items-center justify-between">
        <GoBack />
        {session?.user?.id == suggestionById?.owner && (
          <LinkButton
            text="Edit Feedback"
            color="#4661e6"
            url={`/suggestion/${id}/edit`}
          />
        )}
      </div>
      <CommentContainer feedback={suggestionById} suggestionID={id} />
    </div>
  );
};

export default page;
