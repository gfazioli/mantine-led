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
        <Led variant="flat" size="xl" />
        <Text size="xs">Flat</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led variant="3d" size="xl" />
        <Text size="xs">3D</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led variant="neon" size="xl" />
        <Text size="xs">Neon</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led variant="dot" size="xl" />
        <Text size="xs">Dot</Text>
      </Stack>
    </Group>
  );
}
`;

export const variants: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      {(['flat', '3d', 'neon', 'dot'] as const).map((v) => (
        <Stack key={v} align="center" gap="xs">
          <Led variant={v} size="xl" />
          <Text size="xs" tt="capitalize">
            {v}
          </Text>
        </Stack>
      ))}
    </Group>
  ),
  code,
  defaultExpanded: false,
};
