import { useEffect, useRef, useState } from 'react';

import { Box, Button, rem, Skeleton, Text, Textarea } from '@mantine/core';
import { CustomMarkdown } from '@src/shared/components/CustomMarkdown';
import { getPrompt } from '@src/features/Settings/api/getPrompt';

import styles from './StylePrompt.module.css';
import { setNewPrompt } from '@src/features/Settings/api/setPrompt';

const PRIMARY_COL_HEIGHT = rem('95vh');

export const Prompt = () => {
  const initialPromptRef = useRef<string>('');
  const [prompt, setPrompt] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPrompt();
      setPrompt(data.prompt);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [isEdit]);

  const changeTextareaPrompt = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setPrompt(value);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleSavePrompt = async () => {
    setIsEdit(false);
    setNewPrompt(prompt);
  };

  const isContentChanged = prompt.trim() !== initialPromptRef.current.trim();

  if (!prompt)
    return <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />;

  return (
    <Box className={styles.promtRootWrapper}>
      <Box className={styles.titleWrapper}>
        <Box className={styles.titleItem}>
          <Text
            style={{
              textTransform: 'uppercase',
            }}
          >
            Prompt
          </Text>
        </Box>
      </Box>

      {!isEdit ? (
        <CustomMarkdown message={prompt} />
      ) : (
        <>
          <Textarea
            ref={inputRef}
            value={prompt}
            onChange={changeTextareaPrompt}
            placeholder="Input placeholder"
            classNames={{ input: styles.inputPrompt }}
          />
          <Box className={styles.buttonWrapper}>
            {isContentChanged && (
              <Button onClick={handleSavePrompt}>Save</Button>
            )}
            <Button onClick={handleCancel}>Cancel</Button>
          </Box>
        </>
      )}
    </Box>
  );
};
