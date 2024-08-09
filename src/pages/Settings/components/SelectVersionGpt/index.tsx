import { Box, Radio, rem, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';

import { getVersionGpt } from '@src/features/Setting/api/getVersionGpt';
import { getGptVersionSelect } from '@src/features/Setting/api/getGptVersionSelect';

import classes from './styles.module.css';
import { postSetVersionGpt } from '@src/features/Setting/api/postGptVersionSelect';

type gptVersionsType = {
  [key: string]: string;
};

const PRIMARY_COL_HEIGHT = rem('95vh');

export const SelectVersionGpt = () => {
  const [gptVersion, setGptVersion] = useState<string | null>(null);
  const [gptVersions, setGptVersions] = useState<null | gptVersionsType>(null);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const handleRadioChange = (newValue: string) => {
    setGptVersion(newValue);
    postSetVersionGpt(newValue);
  };

  useEffect(() => {
    const fetchAndSetGptSettingsAndGptVersion = async () => {
      try {
        const { settings } = await getGptVersionSelect();
        setGptVersions(settings);

        const res = await getVersionGpt();
        setGptVersion(res.select_version);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndSetGptSettingsAndGptVersion();
  }, []);

  if (!gptVersions)
    return <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />;

  return (
    <Box className={classes.switchRootWrapper}>
      <Radio.Group
        value={gptVersion}
        onChange={handleRadioChange}
        name="gpt modal"
        label={
          <span
            style={{
              textTransform: 'uppercase',
            }}
          >
            Select gpt modal
          </span>
        }
        withAsterisk
        style={{
          marginBottom: '20px',
        }}
      >
        {Object.entries(gptVersions).map(([key, value]) => (
          <Radio
            value={value}
            label={value}
            key={key}
            classNames={{
              root: classes.switchItem,
            }}
          />
        ))}
      </Radio.Group>
    </Box>
  );
};
