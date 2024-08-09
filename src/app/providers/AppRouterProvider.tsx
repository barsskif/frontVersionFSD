import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Chat } from '@pages/Chat';
import { MainLayout } from '@src/shared/hocs/MainLoaut';
import { Setiings } from '@src/pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout component={<Chat />} />,
  },
  {
    path: '/settings',
    element: <MainLayout component={<Setiings />} />,
  },
]);

export const AppRouterProvider = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
