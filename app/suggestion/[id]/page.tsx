"use server";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import GoBack from "@/components/buttons/GoBack";
import LinkButton from "@/components/buttons/LinkButton";
import CommentContainer from "@/components/comments/CommentContainer";
import NoAccess from "@/components/NoAccess";
import { Feedback as FeedbackT } from "@/types";
import Feedback from "@/models/Feedback";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { Session } from "next-auth";

const page = async ({ params }: any) => {
  const { id } = await params;

  if (id.length != 24) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }
  const result = await Feedback.findById(id).lean();

  if (!result) {
    return <NoAccess url={"/"} id={id} text={"Suggestion not found."} />;
  }

  const suggestionById: FeedbackT | null = convertToSerializableObject(result);

  const session: Session | null = await auth();

  return (
    <div className="max-w-[540px] w-[100vw] flex flex-col gap-4 h-screen overflow-auto mt-10 md:mt-0">
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
      <CommentContainer
        feedback={JSON.parse(JSON.stringify(suggestionById))}
        suggestionID={id}
      />
    </div>
  );
};

export default page;
