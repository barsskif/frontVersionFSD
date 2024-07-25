import { AppMantineProvider } from '@src/app/providers/AppMantineProvider';
import { AppRouterProvider } from './providers/AppRouterProvider';

import './styles/App.css';

export const App = () => {
  return (
    <AppMantineProvider>
      <AppRouterProvider />
    </AppMantineProvider>
  );
};
