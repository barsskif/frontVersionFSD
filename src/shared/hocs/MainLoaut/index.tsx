import { type ReactNode } from 'react';
import { NavbarPanel } from '@src/shared/components/NavBar';

import classes from './StyleMainLayout.module.css';

export const MainLayout = ({ component }: { component: ReactNode }) => {
  return (
    <div className={classes.rootWrapper}>
      <NavbarPanel />
      <div className={classes.childrenContainer}>{component}</div>
    </div>
  );
};
