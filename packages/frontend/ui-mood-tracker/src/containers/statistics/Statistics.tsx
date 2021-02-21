import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import { Header } from 'semantic-ui-react';

import './statistics.scss';
import { MoodState } from '../../store/mood/types';

const Statistics = () => {
  const { t } = useTranslation(['Statistics']);
  const moods = useSelector((state: MoodState) => state.mood);
  let relaxedMoodEntries: any = [];
  let motivatedMoodEntries: any = [];
  let energeticMoodEntries: any = [];
  let curiousMoodEntries: any = [];
  let confidentMoodEntries: any = [];

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

  const chartDataForRelaxedStatus = lineChartConfig();
  const chartDataForMotivatedStatus = lineChartConfig();
  const chartDataForEnergeticStatus = lineChartConfig();
  const chartDataForCuriousStatus = lineChartConfig();
  const chartDataForConfidentStatus = lineChartConfig();

  const constructChartDataForRelaxedStatus = () => {
    relaxedMoodEntries = moods.filter((m: any) => {
      return m.moodEntity_status === 'relaxed';
    });
    chartDataForRelaxedStatus.options.chart.id = 'relaxed-id';
    chartDataForRelaxedStatus.options.xaxis.categories = relaxedMoodEntries.map(
      (e: any) => e.moodEntity_enteredAt
    );
    chartDataForRelaxedStatus.series[0].data = relaxedMoodEntries.map(
      (e: any) => e.moodEntity_intensity
    );
    chartDataForRelaxedStatus.series[0].name = t('moodStatus.relaxed');
  };

  const constructChartDataForMotivatedStatus = () => {
    motivatedMoodEntries = moods.filter((m: any) => {
      return m.moodEntity_status === 'motivated';
    });
    chartDataForRelaxedStatus.options.chart.id = 'motivated-id';
    chartDataForMotivatedStatus.options.xaxis.categories = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_enteredAt
    );
    chartDataForMotivatedStatus.series[0].data = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_intensity
    );
    chartDataForMotivatedStatus.series[0].name = t('moodStatus.motivated');
  };

  const constructChartDataForEnergeticStatus = () => {
    energeticMoodEntries = moods.filter((m: any) => {
      return m.moodEntity_status === 'energetic';
    });
    chartDataForEnergeticStatus.options.chart.id = 'motivated-id';
    chartDataForEnergeticStatus.options.xaxis.categories = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_enteredAt
    );
    chartDataForEnergeticStatus.series[0].data = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_intensity
    );
    chartDataForEnergeticStatus.series[0].name = t('moodStatus.energetic');
  };

  const constructChartDataForCuriousStatus = () => {
    curiousMoodEntries = moods.filter((m: any) => {
      return m.moodEntity_status === 'curious';
    });
    chartDataForCuriousStatus.options.chart.id = 'motivated-id';
    chartDataForCuriousStatus.options.xaxis.categories = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_enteredAt
    );
    chartDataForCuriousStatus.series[0].data = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_intensity
    );
    chartDataForCuriousStatus.series[0].name = t('moodStatus.curious');
  };

  const constructChartDataForConfidentStatus = () => {
    confidentMoodEntries = moods.filter((m: any) => {
      return m.moodEntity_status === 'confident';
    });
    chartDataForConfidentStatus.options.chart.id = 'confident-id';
    chartDataForConfidentStatus.options.xaxis.categories = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_enteredAt
    );
    chartDataForConfidentStatus.series[0].data = motivatedMoodEntries.map(
      (e: any) => e.moodEntity_intensity
    );
    chartDataForConfidentStatus.series[0].name = t('moodStatus.confident');
  };

  const constructChartData = () => {
    constructChartDataForRelaxedStatus();
    constructChartDataForMotivatedStatus();
    constructChartDataForEnergeticStatus();
    constructChartDataForCuriousStatus();
    constructChartDataForConfidentStatus();
  };

  useEffect(() => {
    constructChartData();
  });

  return (
    <article className="statistics">
      <section className="statistics__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <section className="statistics__graph">
        <Chart
          options={chartDataForRelaxedStatus.options}
          series={chartDataForRelaxedStatus.series}
          type="line"
          height="300"
          width="100%"
        />

        <Chart
          options={chartDataForMotivatedStatus.options}
          series={chartDataForMotivatedStatus.series}
          type="line"
          height="300"
          width="100%"
        />

        <Chart
          options={chartDataForEnergeticStatus.options}
          series={chartDataForEnergeticStatus.series}
          type="line"
          height="300"
          width="100%"
        />

        <Chart
          options={chartDataForCuriousStatus.options}
          series={chartDataForCuriousStatus.series}
          type="line"
          height="300"
          width="100%"
        />

        <Chart
          options={chartDataForConfidentStatus.options}
          series={chartDataForConfidentStatus.series}
          type="line"
          height="300"
          width="100%"
        />
      </section>
    </article>
  );
};

export default Statistics;
