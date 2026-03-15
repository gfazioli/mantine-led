import { Led } from '@gfazioli/mantine-led';
import { Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Stack align="center" gap="md">
      <Text size="sm" fw={500}>Cascade animation (staggered delay)</Text>
      <Led.Group
        value={5}
        count={5}
        animate
        animationType="pulse"
        animationDelay={0.2}
        size="lg"
        color="cyan"
        variant="3d"
      />
      <Led.Group
        value={8}
        count={8}
        animate
        animationType="glow"
        animationDelay={0.15}
        size="md"
        color="violet"
        variant="neon"
      />
    </Stack>
  );
}
`;

export const cascade: MantineDemo = {
  type: 'code',
  component: () => (
    <Stack align="center" gap="md">
      <Text size="sm" fw={500}>
        Cascade animation (staggered delay)
      </Text>
      <Led.Group
        value={5}
        count={5}
        animate
        animationType="pulse"
        animationDelay={0.2}
        size="lg"
        color="cyan"
        variant="3d"
      />
      <Led.Group
        value={8}
        count={8}
        animate
        animationType="glow"
        animationDelay={0.15}
        size="md"
        color="violet"
        variant="neon"
      />
    </Stack>
  ),
  code,
  defaultExpanded: false,
};
