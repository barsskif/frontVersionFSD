import { MantineProvider } from '@mantine/core';
import { theme } from '@src/features/theme/theme';

export const AppMantineProvider = ({children}: {children: React.ReactNode}) =>  {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      {children}
    </MantineProvider>
  );
}