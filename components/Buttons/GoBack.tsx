import Image from "next/image";
import Link from "next/link";
import React from "react";

const GoBack = () => {
  return (
    <div className="mb-16">
      <Link
        href={"/"}
        className="flex gap-2 place-items-center font-bold text-[#647196]"
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
