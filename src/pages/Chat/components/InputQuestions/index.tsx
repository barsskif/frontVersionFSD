import { ActionIcon, rem, Textarea, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

import { type InputQuestionsProps } from '@src/pages/Chat/components/InputQuestions/@types';

export const InputQuestions = (props: InputQuestionsProps) => {
  const theme = useMantineTheme();
  const { inputquestion, setinputquestion, sendFn, ...restProps } = props;

  return (
    <Textarea
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
      rightSection={
        !!inputquestion.length && (
          <ActionIcon
            size={32}
            color={theme.primaryColor}
            variant="filled"
            onClick={sendFn}
          >
            <IconArrowRight
              style={{ width: rem(18), height: rem(18), rotate: '270deg' }}
              stroke={1.5}
            />
          </ActionIcon>
        )
      }
      {...restProps}
    />
  );
};
