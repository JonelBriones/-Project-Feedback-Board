"use client";

import { useSession } from "next-auth/react";
import React, { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const LoadingRedirect = ({ text }: any) => {
  return (
    <div className="flex flex-col place-items-center h-[50vh] justify-center gap-10">
      <span className="flex gap-4">
        <h1>{text ? text : "Redirecting"}</h1>
        <BeatLoader
          color={"purple"}
          loading={true}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </span>
    </div>
  );
};

export default LoadingRedirect;
