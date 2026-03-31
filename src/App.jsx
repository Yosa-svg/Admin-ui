import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-24 h-24 animate-spin"
              alt="React logo"
              style={{ animationDuration: "10s" }}
            />
          </a>
        </div>
        <h1 className="text-white text-6xl font-bold mb-16">Vite + React</h1>
        <div className="text-sm space-y-6 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg"
          >
            count is {count}
          </button>
          <p className="text-neutral-400">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-neutral-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
