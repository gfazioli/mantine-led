import { Led } from '@gfazioli/mantine-led';
import { Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Group>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'red', to: 'orange', deg: 45 }} size="xl" />
        <Text size="xs">Fire</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'blue', to: 'cyan', deg: 90 }} size="xl" />
        <Text size="xs">Ice</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'grape', to: 'pink', deg: 135 }} size="xl" variant="3d" />
        <Text size="xs">3D Gradient</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'green', to: 'lime' }} size="xl" variant="neon" />
        <Text size="xs">Neon Gradient</Text>
      </Stack>
    </Group>
  );
}
`;

export const gradient: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'red', to: 'orange', deg: 45 }} size="xl" />
        <Text size="xs">Fire</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'blue', to: 'cyan', deg: 90 }} size="xl" />
        <Text size="xs">Ice</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'grape', to: 'pink', deg: 135 }} size="xl" variant="3d" />
        <Text size="xs">3D Gradient</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led gradient={{ from: 'green', to: 'lime' }} size="xl" variant="neon" />
        <Text size="xs">Neon Gradient</Text>
      </Stack>
    </Group>
  ),
  code,
  defaultExpanded: false,
};
