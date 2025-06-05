import { AppStoreProvider } from '@src/app/providers/AppStoreProvider';
import { AppMantineProvider } from '@src/app/providers/AppMantineProvider';
import { AppRouterProvider } from './providers/AppRouterProvider';

import './styles/App.css';
import { useEffect } from 'react';

export const App = () => {
  async function init() {
    navigator.mediaDevices.addEventListener('devicechange', async (device) => {
      console.log('Device changed', device);
      const deviceList = await navigator.mediaDevices.enumerateDevices()
      console.log('++++++++=', deviceList)
    })
  }

  useEffect(() => {
    init()
  }, [])


  return (
    <AppMantineProvider>
      <AppStoreProvider>
        <AppRouterProvider />
      </AppStoreProvider>
    </AppMantineProvider>
  );
};
