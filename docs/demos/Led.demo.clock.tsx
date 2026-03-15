import { useEffect, useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Paper, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function formatTime(date: Date): string {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

const code = `
import { useEffect, useState } from 'react';
import { Paper, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function formatTime(date: Date): string {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  return \`\${h}:\${m}:\${s}\`;
}

function Demo() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper p="xl" radius="md" withBorder>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value={time} color="red" size="xl" />
        <Text size="xs" c="dimmed">Live clock</Text>
      </Stack>
    </Paper>
  );
}
`;

function Demo() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper p="xl" radius="md" withBorder>
      <Stack align="center" gap="xs">
        <Led.SevenSegment value={time} color="red" size="xl" />
        <Text size="xs" c="dimmed">
          Live clock
        </Text>
      </Stack>
    </Paper>
  );
}

export const clock: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
