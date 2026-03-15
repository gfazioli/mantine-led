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
        <Led value={false} offColor="red" color="green" size="lg" />
        <Text size="xs">Off (red)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value offColor="red" color="green" size="lg" />
        <Text size="xs">On (green)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value={false} offColor="gray" color="blue" size="lg" variant="3d" />
        <Text size="xs">Off 3D (gray)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value offColor="gray" color="blue" size="lg" variant="3d" />
        <Text size="xs">On 3D (blue)</Text>
      </Stack>
    </Group>
  );
}
`;

export const offColor: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Stack align="center" gap="xs">
        <Led value={false} offColor="red" color="green" size="lg" />
        <Text size="xs">Off (red)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value offColor="red" color="green" size="lg" />
        <Text size="xs">On (green)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value={false} offColor="gray" color="blue" size="lg" variant="3d" />
        <Text size="xs">Off 3D (gray)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led value offColor="gray" color="blue" size="lg" variant="3d" />
        <Text size="xs">On 3D (blue)</Text>
      </Stack>
    </Group>
  ),
  code,
  defaultExpanded: false,
};
