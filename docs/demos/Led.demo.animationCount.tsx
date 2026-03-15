import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Button, Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  const [key, setKey] = useState(0);

  return (
    <Stack align="center" gap="md">
      <Group>
        <Stack align="center" gap="xs">
          <Led animate animationType="flash" animationCount={3} size="lg" color="red" key={\`a-\${key}\`} />
          <Text size="xs">3 flashes</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <Led animate animationType="pulse" animationCount={5} size="lg" color="blue" key={\`b-\${key}\`} />
          <Text size="xs">5 pulses</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <Led animate animationType="glow" size="lg" color="green" />
          <Text size="xs">Infinite</Text>
        </Stack>
      </Group>
      <Button variant="light" size="xs" onClick={() => setKey((k) => k + 1)}>
        Replay finite animations
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [key, setKey] = useState(0);

  return (
    <Stack align="center" gap="md">
      <Group>
        <Stack align="center" gap="xs">
          <Led
            animate
            animationType="flash"
            animationCount={3}
            size="lg"
            color="red"
            key={`a-${key}`}
          />
          <Text size="xs">3 flashes</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <Led
            animate
            animationType="pulse"
            animationCount={5}
            size="lg"
            color="blue"
            key={`b-${key}`}
          />
          <Text size="xs">5 pulses</Text>
        </Stack>
        <Stack align="center" gap="xs">
          <Led animate animationType="glow" size="lg" color="green" />
          <Text size="xs">Infinite</Text>
        </Stack>
      </Group>
      <Button variant="light" size="xs" onClick={() => setKey((k) => k + 1)}>
        Replay finite animations
      </Button>
    </Stack>
  );
}

export const animationCount: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
