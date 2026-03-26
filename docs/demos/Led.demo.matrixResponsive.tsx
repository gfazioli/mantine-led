import { Led } from '@gfazioli/mantine-led';
import { Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Stack align="center" gap="xs">
      <Led.Matrix
        rows={4}
        cols={{ base: 4, sm: 6, md: 8, lg: 12 }}
        gap={{ base: 2, sm: 4, md: 6 }}
        color="cyan"
        size="xs"
        variant="dot"
      />
      <Text size="xs" c="dimmed">
        Resize the browser to see columns and gap change
      </Text>
    </Stack>
  );
}
`;

export const matrixResponsive: MantineDemo = {
  type: 'code',
  component: () => (
    <Stack align="center" gap="xs">
      <Led.Matrix
        rows={4}
        cols={{ base: 4, sm: 6, md: 8, lg: 12 }}
        gap={{ base: 2, sm: 4, md: 6 }}
        color="cyan"
        size="xs"
        variant="dot"
      />
      <Text size="xs" c="dimmed">
        Resize the browser to see columns and gap change
      </Text>
    </Stack>
  ),
  code,
  defaultExpanded: false,
};
