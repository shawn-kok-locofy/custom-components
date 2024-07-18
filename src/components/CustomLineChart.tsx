import { FunctionComponent } from 'react';
import styles from "./CustomLineChart.module.css";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEcharts from "echarts-for-react"; 
import { width } from '@mui/system';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
var option;

option = {
  title: {
    text: 'Finance Report'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Income', 'Saving'],
    top: 'end',
    right: '0px',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Income',
      type: 'line',
      stack: 'Difference',
      data: [10000, 17000, 11500, 12000, 7500, 13000, 15000]
    },
    {
      name: 'Saving',
      type: 'line',
      stack: 'Total',
      data: [3000, 9500, 1000, 9000, 2000, 5000, 4000]
    }
  ]
};


export type CustomLineChartType = {
  className?: string;
};


const CustomLineChart: FunctionComponent<CustomLineChartType> = ({ className = ""}) => {
return (
  <div className={[styles.lineChart, className].join(" ")} >
    <ReactEcharts option={option} />
  </div>
);
};

export default CustomLineChart;