import { useEffect, useRef } from 'react';
import { Box, Text } from '@mantine/core';
import { clsx } from 'clsx';
import { getRole } from '@src/shared/utils/getRole';
import { CustomMarkdown } from '@src/shared/components/CustomMarkdown';
import { CardMessageWrapper } from '@src/shared/components/CardMessageWrapper';
import type { messageItemPropsType } from './@types';
import styles from './styles.module.css';

export const MessageItem = ({ messageObj }: messageItemPropsType) => {
  const { text: message, user: sender, time } = messageObj;
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const isUser = getRole(sender);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ block: 'end' });
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
