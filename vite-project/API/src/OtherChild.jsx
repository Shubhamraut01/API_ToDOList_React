import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";
export default function OtherChild() {
  const { appColor } = useContext(GlobalInfo);
  console.log("appColor", appColor);
  return (
    <div>
      <h1 style={{ color: appColor }}>OtherChild</h1>
      <SuperChild />
    </div>
  );
}
