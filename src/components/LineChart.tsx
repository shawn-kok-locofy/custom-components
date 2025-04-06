import { LineChart as FluentLineChart, ChartProps } from "@fluentui/react-charts";
import { FunctionComponent } from "react";
import styles from "./LineChart.module.css";

export type LineChartType = {
  className?: string;
};

const LineChart: FunctionComponent<LineChartType> = ({ className = ""}) => {
  const data: ChartProps = {
    chartTitle: "Finance Report",
    lineChartData: [
      {
        legend: "Income",
        data: [
          { x: new Date("2024-01-01T00:00:00.000Z"), y: 10000 },
          { x: new Date("2024-02-01T00:00:00.000Z"), y: 17000 },
          { x: new Date("2024-03-01T00:00:00.000Z"), y: 11500 },
          { x: new Date("2024-04-01T00:00:00.000Z"), y: 12000 },
          { x: new Date("2024-05-01T00:00:00.000Z"), y: 7500 },
          { x: new Date("2024-06-01T00:00:00.000Z"), y: 13000 },
          { x: new Date("2024-07-01T00:00:00.000Z"), y: 15000 },
        ],
        color: "#91CD75",
        lineOptions: {
          lineBorderWidth: "2",
        },
      },
      {
        legend: "Saving",
        data: [
          { x: new Date("2024-01-01T00:00:00.000Z"), y: 3000 },
          { x: new Date("2024-02-01T00:00:00.000Z"), y: 9500 },
          { x: new Date("2024-03-01T00:00:00.000Z"), y: 1000 },
          { x: new Date("2024-04-01T00:00:00.000Z"), y: 9000 },
          { x: new Date("2024-05-01T00:00:00.000Z"), y: 2000 },
          { x: new Date("2024-06-01T00:00:00.000Z"), y: 5000 },
          { x: new Date("2024-07-01T00:00:00.000Z"), y: 4000 },
        ],
        color: "#EF6666",
        lineOptions: {
          lineBorderWidth: "1",
        },
      },
    ],
  };

  return (
    <div className={[styles.lineChart, className].join(" ")}>
      <FluentLineChart
        culture="en-us"
        data={data}
        legendsOverflowText="Overflow Items"
        yMinValue={0}
        yMaxValue={20000}
        height={400}
        width={800}
        xAxisTickCount={7}
      />
    </div>
  );
};

export default LineChart;
