import { Box, Radio, rem, Skeleton } from '@mantine/core';
import { useEffect, useState } from 'react';

import styles from './StyleSelectVersionGpt.module.css';
import { getVersionGpt } from '@src/features/Settings/api/getVersionGpt';
import { useAppDispatch, useAppSelector } from '@src/shared/hooks/useRedux';
import {
  getSelectVerGptAction,
  postSelectVerGptAction,
} from '@src/features/Settings/model/servsionGptState/actions/versionGptAction';

type gptVersionsType = {
  [key: string]: string;
};

const PRIMARY_COL_HEIGHT = rem('95vh');

export const SelectVersionGpt = () => {
  const dispatch = useAppDispatch();
  const { selectVersionGpt } = useAppSelector(
    (state) => state.selectVersionGpt,
  );
  const [gptVersions, setGptVersions] = useState<null | gptVersionsType>(null);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const handleRadioChange = (newValue: string) => {
    // setActialVersionGpt(newValue);
    dispatch(postSelectVerGptAction(newValue));
  };

  useEffect(() => {
    const fetchGptVersions = async () => {
      try {
        const res = await getVersionGpt();

        setGptVersions(res.settings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGptVersions();
    dispatch(getSelectVerGptAction());
  }, []);

  if (!gptVersions)
    return <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />;

  return (
    <Box className={styles.switchRootWrapper}>
      <Radio.Group
        value={selectVersionGpt}
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
              root: styles.switchItem,
            }}
          />
        ))}
      </Radio.Group>
    </Box>
  );
};
