import Link from "next/link";
import React from "react";

type LinkButtonParams = {
  text: string;
  color: string;
  url: string;
};

const LinkButton = ({ text, color, url }: LinkButtonParams) => {
  return (
    <Link
      href={url}
      className={`bg-[${color}] font-bold text-sm text-white py-3 px-5 rounded-lg`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
