import { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;
  const { theme } = useContext(ThemeContext);

  // Override the "Last Week" bar color (second series) with the active theme color
  const themedSeries = dataset.series.map((s, index) =>
    index === 1 ? { ...s, color: theme.color } : s
  );

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, categoryGapRatio: 0.6 }]}
      series={themedSeries}
      {...chartSetting}
    />
  );
}
