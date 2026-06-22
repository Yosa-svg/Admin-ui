import React from "react";
import { Link } from "react-router-dom";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import Icon from "../Elements/Icon";

function CardBalance(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Total Balance"
        desc={
          <DotsMobileStepper
            data={data.map((item) => (
              <div key={item.id} className="p-2">
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">${item.balance}</div>
                  <div>
                    <Link to="/balance">All account</Link>
                  </div>
                </div>
                <div className="border-b-1 border-gray-05 my-4"></div>
                <div className="flex justify-between bg-primary text-white p-4 rounded-md">
                  <div>
                    Account Type
                    <br />
                    <span className="text-xl font-bold">{item.accountType}</span>
                    <br />
                    {item.accountNumber}
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="ms-auto text-transparent">{item.logo}</div>
                    <div className="flex">
                      <span className="text-xl font-bold me-2">
                        ${item.balance}
                      </span>
                      <div className="bg-white text-primary rounded-full">
                        <Icon.ArrowUpRight width={18} height={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        }
      />
    </>
  );
}

export default CardBalance;
