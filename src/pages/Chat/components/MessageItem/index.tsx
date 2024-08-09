import { Box, Text } from '@mantine/core';
import { clsx } from 'clsx';

import { CustomMarkdown } from '@src/shared/components/CustomMarkdown';
import { CardMessageWrapper } from '@src/shared/components/CardMessageWrapper';

import styles from './styles.module.css';

import { messageItemPropsType } from './@types';

export const MessageItem = ({ messageObj }: messageItemPropsType) => {
  const { text: message, user: sender, time } = messageObj;

  const isUser = sender === 'user';

  return (
    <Box
      className={clsx(styles.wrapperMessageRoot, {
        [styles.wrapperMessageItemTypeUser]: isUser,
      })}
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
