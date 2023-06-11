import React, { useContext } from "react";
import { GlobalInfo } from "./App";
export default function SuperChild() {
  const { appColor, getDay } = useContext(GlobalInfo);
  console.log("appColor", appColor);
  const day = "sunday";

  return (
    <div>
      <h1 style={{ color: appColor }}>SuperChild</h1>
      <button
        onClick={() => {
          getDay(day);
        }}
      >
        Click me
      </button>
    </div>
  );
}
