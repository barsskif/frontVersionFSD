import { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@src/shared/hooks/useRedux';

import { fetchMessage } from '@src/features/Chat/api/fetchMessage';
import { fetchPostSSE } from '@src/features/Chat/api/fetchPostSSE';

import { MessageItem } from '@src/pages/Chat/components/MessageItem';
import { messageType } from '@src/shared/@types/mesages';

import { InputQuestions } from '@src/pages/Chat/components/InputQuestions';

import styles from './styles.module.css';

export const Chat = () => {
  const dispatch = useAppDispatch();
  const [mesages, setMesages] = useState<[] | messageType[]>([]);
  const [inputQuestion, setInputQuestion] = useState<string>('');

  const { selectVersionGptCurent } = useAppSelector(
    ({ globalVersionGptSlice }) => globalVersionGptSlice,
  );

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchMessage();

      if (data.message.length === 0) {
        setMesages([
          {
            id: 0,
            text: 'Привет! Меня зовут Кира! Чем я могу помочь?',
            time: new Date().toISOString(),
            user: 'assistant',
          },
        ]);
      }

      setMesages((prev) => [...prev, ...data.message]);
    };

    fetch();
  }, [dispatch]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (inputQuestion.trim()) {
      fetchPostSSE(inputQuestion, setMesages);
      setMesages((prevMessages) => [
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
        assistent version:{' '}
        <Text component="span">[{selectVersionGptCurent}]</Text>
      </Text>
      <Box className={styles.wrapperMessageBlock}>
        {mesages?.map((item) => (
          <MessageItem messageObj={item} key={item.id} />
        ))}
      </Box>

      <Box>
        <InputQuestions
          setinputquestion={setInputQuestion}
          className={styles.wrapperInputBlock}
          inputquestion={inputQuestion}
          sendFn={handleSubmit}
        />
      </Box>
    </Box>
  );
};
