import { useEffect, useRef, useState } from 'react';
import { Box, Button, rem, Skeleton, Text, Textarea } from '@mantine/core';

import { CustomMarkdown } from '@src/shared/components/CustomMarkdown';

import { getPrompt } from '@src/features/Settings/api/getPrompt';
import { setNewPrompt } from '@src/features/Settings/api/setPrompt';

import EditIcon from '@src/assets/EditIcon.svg?react';

import classes from './StylePrompt.module.css';

const PRIMARY_COL_HEIGHT = rem('95vh');

export const PromptComponent = () => {
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
    <Box className={classes.promtRootWrapper}>
      <Box className={classes.titleWrapper}>
        <Box className={classes.titleItem}>
          <Text
            style={{
              textTransform: 'uppercase',
            }}
          >
            Prompt
          </Text>
        </Box>
        <EditIcon
          onClick={() => setIsEdit((prevState) => !prevState)}
          className={classes.editIcon}
        />
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
            classNames={{ input: classes.inputPrompt }}
          />
          <Box className={classes.buttonWrapper}>
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
