import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from '@mantine/core';

import { getRole } from '@src/shared/utils/getRole';
import { getCurrentTime } from '@src/shared/utils/getTimeMessage';
import { AssistantAvatar, UserAvatar } from '@src/shared/enum';

import classes from './CardMessageWrapper.module.css';
import { ICardMessageWrapperProps } from './@types';

export const CardMessageWrapper = ({
  children,
  sender,
  date,
}: ICardMessageWrapperProps) => {
  const isUser = getRole(sender);
  const urlAvatar = isUser ? UserAvatar : AssistantAvatar;

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.comment}
      styles={() => ({
        root: {
          background: isUser ? '#181616a8' : 'inherit',
          color: isUser ? '#fefefecc' : 'inherit',
        },
      })}
    >
      <Group>
        <Avatar src={urlAvatar} alt={sender} radius="xl" />
        <div>
          <Text fz="sm">{sender}</Text>
          <Text fz="xs" c="dimmed">
            {getCurrentTime(date)}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content}>{children}</div>
      </TypographyStylesProvider>
    </Paper>
  );
};
