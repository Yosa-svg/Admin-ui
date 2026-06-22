import React, { useState } from "react";
import GreatGrandChild from "./GreatGrandChild";

// Component GrandChild
function GrandChild() {
  return (
    <div className="ps-10">
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild;
