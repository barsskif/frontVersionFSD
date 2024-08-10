import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Chat } from '@pages/Chat';
import { MainLayout } from '@src/shared/hocs/MainLoaut';
import { Setiings } from '@src/pages/Settings';

import { useAppDispatch } from '@src/shared/hooks/useRedux';
import {
  getAllVersionGptAction,
  getSelectCurrentVerGptAction,
} from '@src/features/Global/model/globalVervsionGptState/actions/globalVervsionGptStateAction';

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSelectCurrentVerGptAction());
    dispatch(getAllVersionGptAction());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
