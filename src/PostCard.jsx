import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="group flex flex-col justify-between bg-white p-6 rounded-lg shadow transition-all duration-300 hover:scale-105 hover:border hover:border-special-red2 hover:bg-pink-50 min-h-[220px]">
      <h2 className="text-lg font-bold text-gray-800 mb-3 capitalize">
        {title}
      </h2>
      <p className="text-gray-600 text-sm flex-1 mb-4 leading-relaxed">
        {body}
      </p>
      <button
        className={`mt-4 ${clicked ? "bg-special-red2" : "bg-gray-400"} text-white p-2 rounded-md transition-colors`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
