import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

function CardExpenseBreakdown(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Expenses Breakdown"
        desc={
          <div className="h-full md:grid md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex">
                  <div>
                    <div className="bg-special-bg text-gray-02 px-3 py-5 rounded-lg flex flex-col place-content-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ms-4">
                    <span className="text-gray-02">{item.category}</span>
                    <br />
                    <span className="font-bold text-lg">${item.amount}</span>
                    <div className="flex">
                      <span className="text-gray-02">{item.percentage}%*</span>{" "}
                      {item.arrow}
                    </div>
                  </div>
                </div>
                <div className="flex place-content-center flex-col me-8">
                  <Icon.ArrowRight />
                </div>
              </div>
            ))}
          </div>
        }
      />
    </>
  );
}

export default CardExpenseBreakdown;
