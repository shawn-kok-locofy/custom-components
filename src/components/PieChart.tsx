import { FunctionComponent } from "react";
import styles from "./PieChart.module.css";

import {
  DonutChart,
  ChartProps,
  getColorFromToken,
  DataVizPalette,
} from "@fluentui/react-charts";

export type CustomPieChartType = {
  expenditure?: string;
};

const CustomPieChart: FunctionComponent<CustomPieChartType> = ({
  expenditure = "$4,500.00",
}) => {
  const numericExpenditure = parseFloat(expenditure.replace(/[^0-9.-]+/g, ""));

  const points = [
    {
      legend: "Taxi",
      data: 0.24 * numericExpenditure,
      color: getColorFromToken(DataVizPalette.color1),
      xAxisCalloutData: "Taxi",
    },
    {
      legend: "Rent",
      data: 0.25 * numericExpenditure,
      color: getColorFromToken(DataVizPalette.color2),
      xAxisCalloutData: "Rent",
    },
    {
      legend: "Groceries",
      data: 0.14 * numericExpenditure,
      color: getColorFromToken(DataVizPalette.color3),
      xAxisCalloutData: "Groceries",
    },
    {
      legend: "Shopping",
      data: 0.14 * numericExpenditure,
      color: getColorFromToken(DataVizPalette.color4),
      xAxisCalloutData: "Shopping",
    },
    {
      legend: "Others",
      data: 0.20 * numericExpenditure,
      color: getColorFromToken(DataVizPalette.color5),
      xAxisCalloutData: "Others",
    },
  ];

  const data: ChartProps = {
    chartTitle: "Donut chart basic example",
    chartData: points,
  };

  return (
    <div className={styles.pieChart}>
      <div className={styles.expenditure}>{expenditure}</div>
      <div className={styles.innerPieChart}>
        <DonutChart
          culture={
            typeof window !== "undefined" ? window.navigator.language : "en-us"
          }
          data={data}
          innerRadius={55}
          hideLegend={false}
          height={220}
          valueInsideDonut={numericExpenditure}
        />
      </div>
    </div>
  );
};

export default CustomPieChart;
