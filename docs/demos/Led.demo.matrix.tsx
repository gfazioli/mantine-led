import { Led } from '@gfazioli/mantine-led';
import { Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const heartPattern = [
  [false, true, false, true, false],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [false, true, true, true, false],
  [false, false, true, false, false],
];

const code = `
import { Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

const heartPattern = [
  [false, true, false, true, false],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [false, true, true, true, false],
  [false, false, true, false, false],
];

function Demo() {
  return (
    <Group>
      <Stack align="center" gap="xs">
        <Led.Matrix value={heartPattern} color="red" size="sm" />
        <Text size="xs">Heart (dot)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.Matrix value={heartPattern} color="red" size="sm" variant="flat" shape="circle" />
        <Text size="xs">Heart (flat)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.Matrix rows={4} cols={4} color="green" size="xs" />
        <Text size="xs">4x4 all on</Text>
      </Stack>
    </Group>
  );
}
`;

export const matrix: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Stack align="center" gap="xs">
        <Led.Matrix value={heartPattern} color="red" size="sm" />
        <Text size="xs">Heart (dot)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.Matrix value={heartPattern} color="red" size="sm" variant="flat" shape="circle" />
        <Text size="xs">Heart (flat)</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.Matrix rows={4} cols={4} color="green" size="xs" />
        <Text size="xs">4x4 all on</Text>
      </Stack>
    </Group>
  ),
  code,
  defaultExpanded: false,
};
