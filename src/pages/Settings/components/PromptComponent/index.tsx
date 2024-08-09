import { Box } from '@mantine/core';
import { getPrompt } from '@src/features/Settings/api/getPrompt';

import { useEffect, useState } from 'react';

import classes from './styles.module.css';
import { CustomMarkdown } from '@src/shared/components/CustomMarkdown';

export const PromptComponent = () => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const { prompt } = await getPrompt();
      setPrompt(prompt);
    };

    fetch();
  });
  return (
    <Box className={classes.promtRootWrapper}>
      <CustomMarkdown message={prompt} />
    </Box>
  );
};
