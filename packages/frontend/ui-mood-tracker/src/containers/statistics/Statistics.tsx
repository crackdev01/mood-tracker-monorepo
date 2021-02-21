import React from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import { Header } from 'semantic-ui-react';

import './statistics.scss';

function Statistics() {
  const { t } = useTranslation(['MoodEntry', 'Statistics']);
  const chartData = {
    options: {
      chart: {
        id: 'line',
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
        name: t('moodStatus.relaxed'),
        data: [0, 1, 1, 1, 4, 2, 3, 4, 0, 2, 3],
      },
      {
        name: t('moodStatus.motivated'),
        data: [3, 2, 1, 2, 4, 2, 3, 4, 1, 4, 1],
      },
    ],
    width: '100%',
  };

  return (
    <article className="statistics">
      <section className="statistics__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <section className="statistics__graph">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="300"
          width="100%"
        />
      </section>
    </article>
  );
}

export default Statistics;
