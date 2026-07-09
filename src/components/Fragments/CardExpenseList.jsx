import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

function CardExpenseList(props) {
  const { data, isLoading } = props;

  // Render icon based on category name
  const renderIcon = (category) => {
    switch (category?.toLowerCase()) {
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

  // Flatten the data to iterate over all details across all categories
  const flatExpenses = data?.reduce((acc, curr) => {
    if (curr.detail && Array.isArray(curr.detail)) {
      curr.detail.forEach(detailItem => {
        acc.push({
          ...detailItem,
          category: curr.category,
        });
      });
    }
    return acc;
  }, []) || [];

  const expenseContent = (
    <div className="flex flex-col h-full overflow-y-auto" style={{ maxHeight: '600px' }}>
      {flatExpenses.length === 0 ? (
        <div className="text-center text-gray-500 py-10">No expenses found</div>
      ) : (
        flatExpenses.map((item, index) => (
          <div key={index} className="flex justify-between items-center pt-4 pb-4 border-b border-gray-05 last:border-0">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-special-bg3 text-primary flex justify-center items-center rounded-lg">
                {renderIcon(item.category)}
              </div>
              <div className="ms-4">
                <span className="font-bold text-defaultBlack text-base block">{item.item}</span>
                <span className="text-sm text-gray-02">{item.date} &bull; <span className="capitalize">{item.category}</span></span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-defaultBlack">
                ${item.amount}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <Card
      title="Expense Details"
      desc={
        isLoading ? (
          <div className="flex flex-col justify-center items-center h-full text-primary pt-10 pb-10">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <div className="mt-2">Loading Data</div>
          </div>
        ) : (
          expenseContent
        )
      }
    />
  );
}

export default CardExpenseList;
