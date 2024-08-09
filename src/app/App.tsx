import { AppStoreProvider } from '@src/app/providers/AppStoreProvider';
import { AppMantineProvider } from '@src/app/providers/AppMantineProvider';
import { AppRouterProvider } from './providers/AppRouterProvider';

import './styles/App.css';

export const App = () => {
  return (
    <AppMantineProvider>
      <AppStoreProvider>
        <AppRouterProvider />
      </AppStoreProvider>
    </AppMantineProvider>
  );
};
