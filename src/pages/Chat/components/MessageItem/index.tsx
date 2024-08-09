import { Box, Text } from '@mantine/core';
import { clsx } from 'clsx';

import { CustomMarkdown } from '@src/pages/Chat/components/CustomMarkdown';
import { CardMessageWrapper } from '@src/shared/components/CardMessageWrapper';

import styles from './styles.module.css';

import { messageItemPropsType } from './@types';
import { useEffect, useRef } from 'react';

export const MessageItem = ({ messageObj }: messageItemPropsType) => {
  const { text: message, user: sender, time } = messageObj;
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const isUser = sender === 'user';

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          // behavior: 'smooth',
          block: 'end',
        });
      }
    };

    scrollToBottom();
  }, []);

  return (
    <Box
      className={clsx(styles.wrapperMessageRoot, {
        [styles.wrapperMessageItemTypeUser]: isUser,
      })}
      ref={messagesEndRef}
    >
      {isUser ? (
        <CardMessageWrapper sender={sender} date={time}>
          <Text
            className={clsx(styles.wrapperMessageItem, styles.userTextMessage)}
          >
            {message}
          </Text>
        </CardMessageWrapper>
      ) : (
        <Box
          className={clsx(styles.wrapperMessageItem, {
            [styles.wrapperMessageItemType]: isUser,
          })}
        >
          <CardMessageWrapper sender={sender} date={time}>
            <CustomMarkdown message={message} />
          </CardMessageWrapper>
        </Box>
      )}
    </Box>
  );
};
