"use client";
import React, { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
function LoadingPage({ loading, color, size }: any) {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={size ? size : 150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingPage;
