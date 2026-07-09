import React from "react";
import Icon from "../Elements/Icon";

function CardExpenseItem(props) {
  const { data } = props;
  const { category, amount, percentage, trend, detail } = data;

  const renderIcon = (cat) => {
    switch (cat?.toLowerCase()) {
      case "housing":
        return <Icon.House />;
      case "food":
        return <Icon.Food />;
      case "transportation":
        return <Icon.Transport />;
      case "entertainment":
        return <Icon.Movie />;
      case "shopping":
        return <Icon.Shopping />;
      default:
        return <Icon.Other />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col h-full text-defaultBlack dark:text-white transition-colors">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-special-bg3 text-primary flex justify-center items-center rounded-lg">
            {renderIcon(category)}
          </div>
          <div className="ms-4">
            <div className="text-sm font-semibold text-gray-02 dark:text-gray-400 capitalize">{category}</div>
            <div className="text-xl font-bold">${amount}</div>
          </div>
        </div>
        <div className="text-right">
          <div 
            className={`font-bold flex items-center justify-end text-sm ${
              trend === "up" ? "text-special-red" : "text-special-green"
            }`}
          >
            {percentage}% {trend === "up" ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
          </div>
          <div className="text-xs text-gray-02 dark:text-gray-400 mt-1">Compare to the last month</div>
        </div>
      </div>

      {/* Body / Details */}
      <div className="flex-1 flex flex-col">
        {detail?.map((item, idx) => (
          <div 
            key={idx} 
            className="flex justify-between items-center py-3 border-b border-gray-05 dark:border-gray-700 last:border-b-0"
          >
            <div className="text-sm font-semibold">{item.item}</div>
            <div className="text-right">
              <div className="text-sm font-bold">${item.amount}</div>
              <div className="text-xs text-gray-02 dark:text-gray-400 mt-1">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpenseItem;
