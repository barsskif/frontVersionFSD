import { ActionIcon, rem, Textarea, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

import { type InputQuestionsProps } from '@src/pages/Chat/components/InputQuestions/@types';
import { CustomLoading } from '@src/shared/components/CustomLoading';
import { useEffect, useRef } from 'react';

export const InputQuestions = (props: InputQuestionsProps) => {
  const theme = useMantineTheme();
  const { inputquestion, setinputquestion, sendFn, loading, ...restProps } =
    props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!inputRef.current) return;

      if (event.key === 'Enter' && !event.ctrlKey) {
        sendFn(event);
      } else if (event.key === 'Enter' && event.ctrlKey) {
        const cursorPosition = inputRef.current.selectionStart;
        inputRef.current.value =
          inputRef.current.value.substring(0, cursorPosition) +
          '\n' +
          inputRef.current.value.substring(cursorPosition);
        inputRef.current.selectionStart = cursorPosition + 1;
        inputRef.current.selectionEnd = cursorPosition + 1;
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('keypress', handleKeyPress);
    }

    return () => {
      if (inputRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        inputRef.current.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [sendFn]);

  const rightSection = () => {
    if (inputquestion.length) {
      return (
        <ActionIcon
          size={32}
          color={theme.primaryColor}
          variant="filled"
          onClick={sendFn}
          disabled={loading}
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18), rotate: '270deg' }}
            stroke={1.5}
          />
        </ActionIcon>
      );
    }

    if (loading) {
      return <CustomLoading loading={loading} />;
    }
  };

  return (
    <Textarea
      ref={inputRef}
      value={String(inputquestion)}
      onChange={(event) => setinputquestion(event.target.value)}
      placeholder="questions"
      withAsterisk
      styles={() => ({
        input: {
          alignContent: 'center',
          height: '44px',
          width: '600px',
        },
      })}
      rightSection={rightSection()}
      {...restProps}
    />
  );
};
