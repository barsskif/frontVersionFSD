import { setupStore } from '@src/shared/store/store';
import { Provider } from 'react-redux';

const store = setupStore();

export const AppStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};
