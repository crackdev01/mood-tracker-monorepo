import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';
import { Header, Dropdown, Input } from 'semantic-ui-react';

import './statistics.scss';
import { MoodState } from '../../store/mood/types';

const Statistics = () => {
  const { t } = useTranslation(['Statistics']);
  const moods = useSelector((state: MoodState) => state.mood);
  let intensityEntries: any = [];
  let dateEntries: any = [];
  const [chartSeries, setChartSeries] = useState([{ data: [] }]);
  const lineChartConfig = () => {
    return {
      series: chartSeries,
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: true,
      },
      labels: [],
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      yaxis: [
        {
          title: {
            text: t('chart.yaxis'),
          },
        },
      ],
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
  };
  const [defaultLimit, setDefaultLimit] = useState(7);
  const [showCustomLimit, setShowCustomLimit] = useState(false);
  const [chartConfig, setChartConfig] = useState(lineChartConfig());

  const limiterOptions = [
    {
      key: 0,
      value: false,
      text: t('limit.dropdown.default'),
    },
    {
      key: 1,
      value: true,
      text: t('limit.dropdown.custom'),
    },
  ];

  const showLimiter = (_: any, data: any) => {
    setShowCustomLimit(data.value);
  };

  const updateLimiter = (_: any, data: any) => {
    setDefaultLimit(data.value);
  };

  const sortMoodEntriesByDate = moods.sort((a: any, b: any) => {
    const aDate = new Date(a.moodEntity_enteredAt + ' ' + a.moodEntity_enteredAt);
    const bDate = new Date(b.moodEntity_enteredAt + ' ' + b.moodEntity_enteredAt);

    return bDate.getTime() - aDate.getTime();
  });

  const constructChartData = () => {
    console.log('inside construct chart data');
    const sortedMoodEntries = sortMoodEntriesByDate;
    dateEntries = sortedMoodEntries.map((m: any) => m.moodEntity_enteredAt);
    intensityEntries = sortedMoodEntries
      .map((m: any) => {
        return {
          x: dayjs(m.moodEntity_enteredAt).format('DD.MM.YY'),
          y: m.moodEntity_intensity,
        };
      })
      .slice(0, defaultLimit);
    console.log(intensityEntries.length);
    chartConfig.labels = dateEntries;
    chartConfig.series[0].data = intensityEntries;
    setChartSeries(intensityEntries);
    setChartConfig(chartConfig);
  };

  useEffect(() => {
    console.log('updating');
    console.log(chartSeries);
    constructChartData();
  }, [chartConfig, defaultLimit]);

  return (
    <article className="statistics">
      <section className="statistics__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <section className="statistics__limit-options">
        <Dropdown
          placeholder={t('limit.dropdown.default')}
          fluid
          selection
          onChange={showLimiter}
          options={limiterOptions}
        />

        {showCustomLimit && (
          <Input placeholder={t('limit.input.placeholder')} onChange={updateLimiter} />
        )}
      </section>

      <section className="statistics__graph">
        <Chart
          options={chartConfig}
          series={chartConfig.series}
          type="line"
          height="300"
          width="100%"
        />
      </section>
    </article>
  );
};

export default Statistics;
