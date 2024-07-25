import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from '@mantine/core';

import classes from './CardMessageWrapper.module.css';
import { getCurrentTime } from '@src/shared/utils/getTimeMessage';

export const CardMessageWrapper = ({
  children,
  sender,
  date,
}: {
  children: React.ReactNode;
  sender: string;
  date: string;
}) => {
  const urlAvatar =
    sender === 'user'
      ? 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'
      : 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png';

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.comment}
      styles={() => ({
        root: {
          background: sender === 'user' ? '#181616a8' : 'inherit',
          color: sender === 'user' ? '#fefefecc' : 'inherit',
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
