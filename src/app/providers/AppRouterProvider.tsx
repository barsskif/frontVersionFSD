import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Chat } from '@pages/Chat';
import { MainLayout } from '@src/shared/hocs/MainLoaut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout component={<Chat />} />,
  },
]);

export const AppRouterProvider = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
