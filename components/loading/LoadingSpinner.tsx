import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
function LoadingSpinner({ loading, size }: any) {
  return (
    <ClipLoader
      color={"purple"}
      loading={loading}
      cssOverride={override}
      size={size ? size : 150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingSpinner;
