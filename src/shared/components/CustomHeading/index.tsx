import { Text } from '@mantine/core';
import { ICustomHeading } from '@src/shared/components/CustomHeading/types';

const headingSizes = {
  h1: 'xl',
  h2: 'lg',
  h3: 'md',
};

export const CustomHeading = ({
  level,
  children,
  className,
}: ICustomHeading<keyof typeof headingSizes>) => {
  return (
    <Text component={level} size={headingSizes[level]} className={className}>
      {children}
    </Text>
  );
};
