import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton variant="text" width={210} height={58} />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </>
  );
}
