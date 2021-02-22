import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

const LineChart = (props: any) => {
  const { t } = useTranslation(['Statistics']);
  const series = [
    {
      name: 'Intensity',
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
    colors: ['#210124'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ['#1E3A63'],
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
        formatter: function (y: any) {
          if (typeof y !== 'undefined') {
            return 'Intensity Value: ' + y.toFixed(0);
          }
          return y;
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
