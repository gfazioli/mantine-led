import { useEffect, useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Button, Group, Paper, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

type TrafficState = 'red' | 'yellow' | 'green';

const DURATIONS: Record<TrafficState, number> = { red: 4000, green: 3000, yellow: 1500 };
const NEXT: Record<TrafficState, TrafficState> = { red: 'green', green: 'yellow', yellow: 'red' };

const code = `
import { useEffect, useState } from 'react';
import { Button, Group, Paper, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

type TrafficState = 'red' | 'yellow' | 'green';

const DURATIONS: Record<TrafficState, number> = { red: 4000, green: 3000, yellow: 1500 };
const NEXT: Record<TrafficState, TrafficState> = { red: 'green', green: 'yellow', yellow: 'red' };

function Demo() {
  const [state, setState] = useState<TrafficState>('red');
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setState(NEXT[state]), DURATIONS[state]);
    return () => clearTimeout(timer);
  }, [state, running]);

  return (
    <Group justify="center" gap="xl">
      <Paper p="lg" withBorder radius="xl" bg="dark.8" w={80}>
        <Stack align="center" gap="md">
          <Led
            value={state === 'red'}
            color="red"
            offColor="dark"
            size="xl"
            variant="3d"
            animate={state === 'red'}
            animationType="glow"
            tooltip="Stop"
          />
          <Led
            value={state === 'yellow'}
            color="yellow"
            offColor="dark"
            size="xl"
            variant="3d"
            animate={state === 'yellow'}
            animationType="pulse"
            animationDuration={0.5}
            tooltip="Caution"
          />
          <Led
            value={state === 'green'}
            color="green"
            offColor="dark"
            size="xl"
            variant="3d"
            tooltip="Go"
          />
        </Stack>
      </Paper>
      <Stack gap="xs">
        <Text fw={700} size="lg" tt="uppercase">{state}</Text>
        <Button
          variant="light"
          size="xs"
          onClick={() => setRunning((r) => !r)}
        >
          {running ? 'Pause' : 'Resume'}
        </Button>
        <Button
          variant="subtle"
          size="xs"
          onClick={() => setState(NEXT[state])}
        >
          Skip
        </Button>
      </Stack>
    </Group>
  );
}
`;

function Demo() {
  const [state, setState] = useState<TrafficState>('red');
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) {
      return;
    }
    const timer = setTimeout(() => setState(NEXT[state]), DURATIONS[state]);
    return () => clearTimeout(timer);
  }, [state, running]);

  return (
    <Group justify="center" gap="xl">
      <Paper p="lg" withBorder radius="xl" bg="dark.8" w={80}>
        <Stack align="center" gap="md">
          <Led
            value={state === 'red'}
            color="red"
            offColor="dark"
            size="xl"
            variant="3d"
            animate={state === 'red'}
            animationType="glow"
            tooltip="Stop"
          />
          <Led
            value={state === 'yellow'}
            color="yellow"
            offColor="dark"
            size="xl"
            variant="3d"
            animate={state === 'yellow'}
            animationType="pulse"
            animationDuration={0.5}
            tooltip="Caution"
          />
          <Led
            value={state === 'green'}
            color="green"
            offColor="dark"
            size="xl"
            variant="3d"
            tooltip="Go"
          />
        </Stack>
      </Paper>
      <Stack gap="xs">
        <Text fw={700} size="lg" tt="uppercase">
          {state}
        </Text>
        <Button variant="light" size="xs" onClick={() => setRunning((r) => !r)}>
          {running ? 'Pause' : 'Resume'}
        </Button>
        <Button variant="subtle" size="xs" onClick={() => setState(NEXT[state])}>
          Skip
        </Button>
      </Stack>
    </Group>
  );
}

export const trafficLight: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
