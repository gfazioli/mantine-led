import { Led } from '@gfazioli/mantine-led';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Group>
      <Led tooltip="Server is online" color="green" size="lg" />
      <Led tooltip="Database connected" color="blue" size="lg" variant="3d" />
      <Led tooltip="Service unavailable" value={false} color="red" size="lg" />
    </Group>
  );
}
`;

export const tooltip: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Led tooltip="Server is online" color="green" size="lg" />
      <Led tooltip="Database connected" color="blue" size="lg" variant="3d" />
      <Led tooltip="Service unavailable" value={false} color="red" size="lg" />
    </Group>
  ),
  code,
  defaultExpanded: false,
};
