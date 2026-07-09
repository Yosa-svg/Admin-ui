import React from "react";

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center text-gray-02 mb-2">
        <div className="text-2xl text-defaultBlack dark:text-white">{title}</div>
        {link && <div className="text-xs">View All</div>}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-5 shadow-xl flex-1 text-defaultBlack dark:text-white">
        {desc}
      </div>
    </div>
  );
}

export default Card;
