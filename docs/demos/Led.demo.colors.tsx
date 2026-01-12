import { Led } from '@gfazioli/mantine-led';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Group>
      <Led color="red" value />
      <Led color="green" value />
      <Led color="blue" value />
      <Led color="yellow" value />
      <Led color="orange" value />
      <Led color="cyan" value />
      <Led color="pink" value />
      <Led color="violet" value />
    </Group>
  );
}
`;

export const colors: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Led color="red" value />
      <Led color="green" value />
      <Led color="blue" value />
      <Led color="yellow" value />
      <Led color="orange" value />
      <Led color="cyan" value />
      <Led color="pink" value />
      <Led color="violet" value />
    </Group>
  ),
  code,
};
