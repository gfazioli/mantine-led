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
        <Led shape="circle" size="lg" />
        <Text size="xs">Circle</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="square" size="lg" />
        <Text size="xs">Square</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="rectangle" size="lg" />
        <Text size="xs">Rectangle</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="circle" size="lg" variant="3d" />
        <Text size="xs">Circle 3D</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="square" size="lg" variant="3d" />
        <Text size="xs">Square 3D</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="rectangle" size="lg" variant="3d" />
        <Text size="xs">Rectangle 3D</Text>
      </Stack>
    </Group>
  );
}
`;

export const shape: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Stack align="center" gap="xs">
        <Led shape="circle" size="lg" />
        <Text size="xs">Circle</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="square" size="lg" />
        <Text size="xs">Square</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="rectangle" size="lg" />
        <Text size="xs">Rectangle</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="circle" size="lg" variant="3d" />
        <Text size="xs">Circle 3D</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="square" size="lg" variant="3d" />
        <Text size="xs">Square 3D</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led shape="rectangle" size="lg" variant="3d" />
        <Text size="xs">Rectangle 3D</Text>
      </Stack>
    </Group>
  ),
  code,
  defaultExpanded: false,
};
