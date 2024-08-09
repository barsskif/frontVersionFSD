import { Box } from '@mantine/core';
import classes from './styles.module.css';

export const Stub = ({
  tuitle,
  discription,
}: {
  tuitle: string;
  discription: string;
}) => {
  return (
    <Box className={classes.stubRootWrapper}>
      <p
        style={{
          marginTop: '0px',
          textTransform: 'uppercase',
        }}
      >
        {tuitle}
      </p>
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70%',
        }}
      >
        <p>{discription}</p>
      </div>
    </Box>
  );
};
