import React, { useContext } from "react";
import { GlobalInfo } from "./App";
export default function Child() {
  const { appColor } = useContext(GlobalInfo);
  console.log("appColor", appColor);
  return (
    <div>
      <h1 style={{ color: appColor }}>Child</h1>
    </div>
  );
}
