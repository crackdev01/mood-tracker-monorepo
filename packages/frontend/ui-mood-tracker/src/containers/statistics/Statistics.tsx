import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Header, Dropdown, Input } from 'semantic-ui-react';

import LineChart from '../../components/statistics/LineChart';
import { ApplicationState } from '../../store';

import './statistics.scss';

const Statistics = () => {
  const { t } = useTranslation(['Statistics']);
  const DEFAULT_LIMIT = 7;
  const moods = useSelector((state: ApplicationState) => state.moodReducer.mood);
  const [chartData, setChartData] = useState([{ x: '', y: 0 }]);
  const [defaultLimit, setDefaultLimit] = useState(DEFAULT_LIMIT);
  const [showCustomLimit, setShowCustomLimit] = useState(false);

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
    if (!data.value) setDefaultLimit(DEFAULT_LIMIT);
  };

  const updateLimiter = (_: any, data: any) => {
    setDefaultLimit(data.value < DEFAULT_LIMIT ? DEFAULT_LIMIT : data.value);
  };

  const sortMoodEntriesByDate = moods.sort((a: any, b: any) => {
    const aDate = new Date(a.mood_enteredAt + ' ' + a.mood_enteredAt);
    const bDate = new Date(b.mood_enteredAt + ' ' + b.mood_enteredAt);

    return bDate.getTime() - aDate.getTime();
  });

  const constructData = () => {
    const intensityEntries = sortMoodEntriesByDate
      .map((m: any) => {
        return {
          x: dayjs(m.mood_enteredAt).format('DD.MM.YY'),
          y: m.mood_intensity,
        };
      })
      .slice(0, defaultLimit);
    setChartData(intensityEntries);
  };

  useEffect(() => {
    constructData();
  }, [defaultLimit]);

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
        <LineChart data={chartData} title="Mood Entries" />
      </section>
    </article>
  );
};

export default Statistics;
