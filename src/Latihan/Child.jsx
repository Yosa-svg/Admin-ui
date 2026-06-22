import React, { useState } from "react";
import GrandChild from "./GrandChild";

// Component Child
function Child() {
  return (
    <div className="ps-10">
      <GrandChild />
    </div>
  );
}

export default Child;
