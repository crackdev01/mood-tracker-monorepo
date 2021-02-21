import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown } from 'semantic-ui-react';

const AddEntry = () => {
  const { t } = useTranslation(['MoodEntry']);
  const moodStatusOptions = [
    {
      key: 'relaxed',
      text: t('moodStatus.relaxed'),
      value: 'relaxed',
    },
    {
      key: 'motivated',
      text: t('moodStatus.motivated'),
      value: 'motivated',
    },
    {
      key: 'energetic',
      text: t('moodStatus.energetic'),
      value: 'energetic',
    },
    {
      key: 'curious',
      text: t('moodStatus.curious'),
      value: 'curious',
    },
    {
      key: 'confident',
      text: t('moodStatus.confident'),
      value: 'confident',
    },
  ];
  const intensityOptions = [
    {
      key: '0',
      text: '0',
      value: 0,
    },
    {
      key: '1',
      text: '1',
      value: 1,
    },
    {
      key: '2',
      text: '2',
      value: 2,
    },
    {
      key: '3',
      text: '3',
      value: 3,
    },
    {
      key: '4',
      text: '4',
      value: 4,
    },
  ];
  const [intensity, setIntensity] = useState(0);
  const loading = false;

  return (
    <article className="mood-entry__add">
      <section className="mood-entry__add__options">
        <div>
          <Dropdown
            placeholder={t('moodStatus.placeholder')}
            fluid
            selection
            options={moodStatusOptions}
          />
        </div>

        <div>
          <Dropdown
            placeholder={t('intensity.placeholder')}
            fluid
            selection
            options={intensityOptions}
          />
        </div>

        <div>
          <Button loading={loading} basic color="olive">
            {t('buttons.add')}
          </Button>
        </div>
      </section>
    </article>
  );
};

export default AddEntry;
