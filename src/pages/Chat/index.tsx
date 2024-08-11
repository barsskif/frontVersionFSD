import { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@src/shared/hooks/useRedux';

import { fetchMessage } from '@src/features/Chat/api/fetchMessage';
import { fetchPostSSE } from '@src/features/Chat/api/fetchPostSSE';

import { InputQuestions } from '@src/pages/Chat/components/InputQuestions';
import { MessageItem } from '@src/pages/Chat/components/MessageItem';

import { getLLM } from '@src/shared/utils/getLLM';
import { messageType } from '@src/shared/@types/mesages';

import styles from './styles.module.css';

const PRESENTATION_MSG = {
  id: 0,
  text: 'Меня зовут Пятница! \n Чем я могу помочь?',
  time: new Date().toISOString(),
  user: 'assistant',
};

export const Chat = () => {
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<[] | messageType[]>([]);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { selectVersionGptCurrent } = useAppSelector(
    ({ globalVersionGptSlice }) => globalVersionGptSlice,
  );

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchMessage();

      if (data.message.length === 0) {
        setMessages([PRESENTATION_MSG]);
      }

      setMessages((prev) => [...prev, ...data.message]);
    };

    fetch().then();
  }, [dispatch]);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | KeyboardEvent,
  ) => {
    event.preventDefault();
    if (inputQuestion.trim()) {
      await fetchPostSSE(
        inputQuestion,
        setMessages,
        getLLM(selectVersionGptCurrent),
        setIsLoading,
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user: 'user',
          text: inputQuestion,
          id: Date.now(),
          time: new Date().toISOString(),
        },
      ]);
      setInputQuestion('');
    }
  };

  return (
    <Box className={styles.wrapperChatRoot}>
      <Text component="h1" className="">
        assistant version:{' '}
        <Text component="span">[ {selectVersionGptCurrent} ]</Text>
      </Text>
      <Box className={styles.wrapperMessageBlock}>
        {messages?.map((item) => (
          <MessageItem messageObj={item} key={item.id} />
        ))}
      </Box>

      <Box>
        <InputQuestions
          setinputquestion={setInputQuestion}
          className={styles.wrapperInputBlock}
          inputquestion={inputQuestion}
          sendFn={handleSubmit}
          loading={isLoading}
        />
      </Box>
    </Box>
  );
};
