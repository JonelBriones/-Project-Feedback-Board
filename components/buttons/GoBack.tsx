import Image from "next/image";
import Link from "next/link";
import React from "react";

const GoBack = ({ url }: any) => {
  return (
    <div className="">
      <Link
        href={url ? url : "/"}
        className="flex gap-2 place-items-center font-bold text-[#647196] hover:underline"
      >
        <Image
          src="/images/shared/icon-arrow-left.svg"
          width={8}
          height={4}
          alt="icon-arrow-left"
        />
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
