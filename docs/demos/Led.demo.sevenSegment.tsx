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
        <Led.SevenSegment value={42} color="red" size="lg" />
        <Text size="xs">Number</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value="12:30" color="green" size="md" />
        <Text size="xs">Clock</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value="HE-LP" color="cyan" size="sm" />
        <Text size="xs">Text</Text>
      </Stack>
    </Group>
  );
}
`;

export const sevenSegment: MantineDemo = {
  type: 'code',
  component: () => (
    <Group>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value={42} color="red" size="lg" />
        <Text size="xs">Number</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value="12:30" color="green" size="md" />
        <Text size="xs">Clock</Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value="HE-LP" color="cyan" size="sm" />
        <Text size="xs">Text</Text>
      </Stack>
    </Group>
  ),
  code,
  defaultExpanded: false,
};
