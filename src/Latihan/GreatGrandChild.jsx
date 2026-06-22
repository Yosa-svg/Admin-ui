import React, { useContext, useState } from "react";
import { CounterContext } from "../context/counterContext";

// Component GreatGrandChild
function GreatGrandChild() {
  const { count } = useContext(CounterContext);

  return (
    <div className="ps-10">
      <p>Nilai count di GreatGrandChild dari Parent: {count}</p>
    </div>
  );
}

export default GreatGrandChild;
