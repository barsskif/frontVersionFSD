import { Box, Container, Grid, SimpleGrid } from '@mantine/core';
import { Prompt } from '@src/pages/Settings/components/Prompt';
import { SelectVersionGpt } from '@src/pages/Settings/components/SelectVersionGpt';

import styles from './styles.module.css'

export const Settings = () => {
  return (
    <Container
      my="md"
      style={{
        maxWidth: '100%',
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Prompt />
        <Grid gutter="md">
          <Grid.Col>
            <Box className={styles.stubRootWrapper}>
              <p
                style={{
                  marginTop: '0px',
                  textTransform: 'uppercase',
                }}
              >
                sdklvnkjsdv
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
                <p>NO DATA</p>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className={styles.stubRootWrapper}>
              <p
                style={{
                  marginTop: '0px',
                  textTransform: 'uppercase',
                }}
              >
                sdklvnkjsdv
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
                <p>NO DATA</p>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <SelectVersionGpt />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
