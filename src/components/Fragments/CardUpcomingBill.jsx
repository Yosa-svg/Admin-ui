import React from "react";
import Card from "../Elements/Card";

function CardUpcomingBill(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          <div className="flex flex-col justify-around h-full">
            {data.map((item) => (
              <div key={item.id} className="flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg p-4 rounded-lg flex flex-col">
                    <span className="text-xs">{item.month}</span>
                    <span className="text-2xl font-bold">{item.date}</span>
                  </div>
                  <div className="ms-10">
                    {item.icon}
                    <span className="font-bold">{item.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {item.lastCharge}</span>
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
        }
      />
    </>
  );
}

export default CardUpcomingBill;
