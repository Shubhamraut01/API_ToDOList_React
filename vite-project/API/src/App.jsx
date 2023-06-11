import React, { createContext, useState } from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";
export const GlobalInfo = createContext();
function App() {
  const [color, setColor] = useState("green");
  const getDay = (item) => {
    console.log(item);
  };
  return (
    <>
      <GlobalInfo.Provider value={{ appColor: color }}>
        {" "}
        <div>App</div>
        <Child />
        <OtherChild />
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
