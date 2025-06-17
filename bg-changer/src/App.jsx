import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center fixed bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl px-3 py-1.5 rounded bg-black text-white">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 px-3.5 py-1 rounded-3xl outline-none cursor-pointer"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 px-3.5 py-1 rounded-3xl outline-none cursor-pointer"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 px-3.5 py-1 rounded-3xl outline-none cursor-pointer"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
