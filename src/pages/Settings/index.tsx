import { Container, Grid, SimpleGrid } from '@mantine/core';

import { PromptComponent } from '@src/pages/Settings/components/PromptComponent';
import { SelectVersionGpt } from '@src/pages/Settings/components/SelectVersionGpt';
import { Stub } from '@src/shared/components/Stub';

export const Setings = () => {
  return (
    <Container
      my="md"
      style={{
        maxWidth: '100%',
      }}
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <PromptComponent />
        <Grid gutter="md">
          <Grid.Col>
            <Stub tuitle="no data" discription="no data" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Stub tuitle="no data" discription="no data" />
          </Grid.Col>
          <Grid.Col span={6}>
            <SelectVersionGpt />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
