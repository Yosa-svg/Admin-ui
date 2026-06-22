import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

function CardStatistic(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Statistics"
        desc={
          <>
            <select className="font-bold text-2xl">
              <option>Weekly Comparison</option>
            </select>
            <BarsDataset dataset={data} />
          </>
        }
      />
    </>
  );
}

export default CardStatistic;
