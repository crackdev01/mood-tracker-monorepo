import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

const LineChart = (props: any) => {
  const { t } = useTranslation(['Statistics']);
  const series = [
    {
      name: t('chart.yaxis'),
      data: props.data,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    yaxis: [
      {
        title: {
          text: t('chart.yaxis'),
        },
      },
    ],
    colors: ['#094D84'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ['#210124'],
        opacityFrom: 1,
        opacityTo: 1,
        type: 'vertical',
        stops: [0, 30],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          /* istanbul ignore next */
          return typeof y !== 'undefined' ? y.toFixed(0) : y;
        },
      },
    },
  };
  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={350} width="100%" />
    </div>
  );
};

export default LineChart;
