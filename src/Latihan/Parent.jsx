import React, { useContext } from "react";
import Child from "./Child";
import { CounterContext } from "../context/counterContext";

// Component Parent
function Parent() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="text-2xl">
      <p>Nilai count di Parent: {count}</p>
      <Child />

      <button
        className="p-2 bg-gray-300 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
}

export default Parent;
