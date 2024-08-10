import { useEffect, type ReactNode } from 'react';
import { NavbarPanel } from '@src/shared/components/NavBar';

import { useAppDispatch } from '@src/shared/hooks/useRedux';
import {
  getAllVersionGptAction,
  getSelectCurrentVerGptAction,
} from '@src/features/Global/model/globalVervsionGptState/actions/globalVervsionGptStateAction';

import classes from './StyleMainLayout.module.css';

export const MainLayout = ({ component }: { component: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSelectCurrentVerGptAction());
    dispatch(getAllVersionGptAction());
  }, [dispatch]);

  return (
    <div className={classes.rootWrapper}>
      <NavbarPanel />
      <div className={classes.childrenContainer}>{component}</div>
    </div>
  );
};
