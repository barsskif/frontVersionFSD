import { Box, Radio, rem, Skeleton } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '@src/shared/hooks/useRedux';

import classes from './styles.module.css';
import { postSelectVerGptAction } from '@src/features/Settings/model/vervsionGptState/actions/versionGptAction';

const PRIMARY_COL_HEIGHT = rem('95vh');

export const SelectVersionGpt = () => {
  const dispatch = useAppDispatch();
  const { selectVersionGptCurent, allVersionGpt } = useAppSelector(
    ({ globalVersionGptSlice }) => globalVersionGptSlice,
  );

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const handleRadioChange = (newValue: string) => {
    dispatch(postSelectVerGptAction(newValue));
  };

  if (!allVersionGpt)
    return <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />;

  return (
    <Box className={classes.switchRootWrapper}>
      <Radio.Group
        value={selectVersionGptCurent}
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
        {Object.entries(allVersionGpt).map(([key, value]) => (
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
