import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { FunctionComponent} from "react";
import styles from "./CustomPieChart.module.css";
import ReactEcharts from "echarts-for-react"; 

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | LegendComponentOption | PieSeriesOption
>;

var option: EChartsOption;

option = {
  legend: {
    top: 'center',
    right: '0px',
    orient: 'vertical'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      top: "center",
      width: 200,
      height: 200,
      padAngle: 5,
      itemStyle: {
        borderRadius: 4
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: 'normal'
        }
      },
      data: [
        { value: 24, name: 'Taxi' },
        { value: 25, name: 'Rent' },
        { value: 14, name: 'Groceries' },
        { value: 14, name: 'Shopping' },
        { value: 20, name: 'Others' }
      ]
    }
  ]
};

export type CustomPieChartType = {
    expenditure?: string;
  };

  
const CustomPieChart: FunctionComponent<CustomPieChartType> = ({ expenditure="$4,500.30" }) => {

return (
  <div className={styles.pieChart} >
    <div className={styles.expenditure}>{expenditure}</div>
    <div className={styles.innerPieChart}>
      <ReactEcharts option={option} />
    </div>
  </div>
);
};

export default CustomPieChart;