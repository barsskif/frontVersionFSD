import { Box } from '@mantine/core';
import { getPrompt } from '@src/features/Setting/api/getPrompt';
import { CustomMarkdown } from '@src/pages/Chat/components/CustomMarkdown';
import { useEffect, useState } from 'react';

import classes from './styles.module.css';

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
