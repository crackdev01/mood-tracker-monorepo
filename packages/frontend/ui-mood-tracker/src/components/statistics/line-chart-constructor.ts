const lineChartConfig = () => {
  return {
    options: {
      chart: {
        id: 'line',
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        categories: [0, 1, 2, 3, 4],
      },
    },
    stroke: {
      curve: 'smooth',
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
    width: '100%',
  };
};

export const generateLineChartConfig = (moodEntries: any) => {
  const chartConfig = lineChartConfig();
  return chartConfig;
};
