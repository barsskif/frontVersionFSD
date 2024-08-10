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

export const CardMessageWrapper = ({
  children,
  sender,
  date,
}: {
  children: React.ReactNode;
  sender: string;
  date: string;
}) => {
  const role = getRole(sender);
  const urlAvatar = role ? UserAvatar : AssistantAvatar;

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.comment}
      styles={() => ({
        root: {
          background: role ? '#181616a8' : 'inherit',
          color: role ? '#fefefecc' : 'inherit',
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
