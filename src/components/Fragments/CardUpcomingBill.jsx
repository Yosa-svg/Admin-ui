import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

function CardUpcomingBill(props) {
  const { data, isLoading } = props;

  const renderIcon = (logoStr) => {
    if (!logoStr) return null;
    const iconName = logoStr.split(".")[0];
    const IconComponent = Icon[iconName] || Icon.Bill;
    return (
      <div className="h-10 w-10 bg-special-bg3 text-primary flex justify-center items-center rounded-lg">
        <IconComponent />
      </div>
    );
  };

  const billContent = (
    <div className="flex flex-col justify-around h-full">
      {data?.map((item) => (
        <div key={item.id} className="flex justify-between pt-3 pb-3">
          <div className="flex">
            <div className="bg-special-bg p-4 rounded-lg flex flex-col items-center justify-center w-16">
              <span className="text-xs">{item.month}</span>
              <span className="text-2xl font-bold">{item.date}</span>
            </div>
            <div className="ms-4 flex items-center">
              {renderIcon(item.logo || item.icon)}
              <div className="ms-3">
                <span className="font-bold">{item.name}</span>
                <br />
                <span className="text-xs text-gray-02">Last Charge - {item.lastCharge}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
              ${item.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          isLoading ? (
            <div className="flex flex-col justify-center items-center h-full text-primary pt-10 pb-10">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              <div className="mt-2">Loading Data</div>
            </div>
          ) : (
            billContent
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;
