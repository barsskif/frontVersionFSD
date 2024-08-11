import { useEffect, useRef } from 'react';
import { ActionIcon, rem, Textarea, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { CustomLoading } from '@src/shared/components/CustomLoading';
import type { InputQuestionsProps } from '@src/pages/Chat/components/InputQuestions/@types';

export const InputQuestions = (props: InputQuestionsProps) => {
  const theme = useMantineTheme();
  const { inputquestion, setinputquestion, sendFn, loading, ...restProps } =
    props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!inputRef.current) return;
      if (event.key === 'Enter' && !event.shiftKey) {
        sendFn(event);
      } else if (event.key === 'Enter' && event.shiftKey) {
        return;
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('keypress', handleKeyPress);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [sendFn]);

  const renderRightSection = () => {
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
            style={{
              width: rem(18),
              height: rem(18),
              rotate: '270deg',
            }}
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
      styles={{
        input: {
          alignContent: 'center',
          height: '44px',
          width: '600px',
        },
      }}
      rightSection={renderRightSection()}
      {...restProps}
    />
  );
};
