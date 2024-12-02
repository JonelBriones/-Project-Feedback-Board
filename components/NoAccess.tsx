import GoBack from "@/components/Buttons/GoBack";
import React from "react";
import { IoIosWarning } from "react-icons/io";

type Id = {
  id: string;
};

const NoAccess = ({ id }: Id) => {
  return (
    <div className="max-w-[540px] w-[100vw] mt-10 md:mt-0">
      <GoBack url={`/suggestion/${id}`} />
      <div className="mt-16 flex flex-col gap-8 relative rounded-lg bg-white p-8 justify-center place-items-center ">
        <IoIosWarning size={"10rem"} color="#ad1fea" />
        <h1 className="font-bold text-xl">
          You do not have access to this page.
        </h1>
      </div>
    </div>
  );
};

export default NoAccess;