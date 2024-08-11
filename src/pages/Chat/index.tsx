import React, { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@src/shared/hooks/useRedux';

import { fetchMessage } from '@src/features/Chat/api/fetchMessage';
import { fetchPostSSE } from '@src/features/Chat/api/fetchPostSSE';

import { MessageItem } from '@src/pages/Chat/components/MessageItem';
import { messageType } from '@src/shared/@types/mesages';

import { InputQuestions } from '@src/pages/Chat/components/InputQuestions';

import styles from './styles.module.css';
import { getLLM } from '@src/shared/utils/getLLM';

export const Chat = () => {
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<[] | messageType[]>([]);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { selectVersionGptCurrent } = useAppSelector(
    state => state.globalVersionGptSlice,
  );

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchMessage();

      if (data.message.length === 0) {
        setMessages([
          {
            id: 0,
            text: 'Меня зовут Пятница! \n Чем я могу помочь?',
            time: new Date().toISOString(),
            user: 'assistant',
          },
        ]);
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
        <Text component="span">[{selectVersionGptCurrent}]</Text>
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
