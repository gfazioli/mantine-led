import { Led } from '@gfazioli/mantine-led';
import { Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Stack gap="lg" align="center">
      <Group>
        <Led tooltip="Server is online" color="green" size="lg" />
        <Led tooltip="Database connected" color="blue" size="lg" variant="3d" />
        <Led tooltip="Service unavailable" value={false} color="red" size="lg" />
      </Group>

      <Text size="sm" c="dimmed">With tooltipProps</Text>
      <Group>
        <Led
          tooltip="Uptime: 99.9%"
          tooltipProps={{ position: 'bottom', withArrow: true, color: 'green' }}
          color="green"
          size="lg"
          variant="3d"
        />
        <Led
          tooltip="Warning: high latency"
          tooltipProps={{ position: 'right', withArrow: true, color: 'yellow' }}
          color="yellow"
          size="lg"
          variant="3d"
        />
        <Led
          tooltip="Offline since 2h"
          tooltipProps={{ position: 'bottom', withArrow: true, color: 'red', multiline: true, w: 150 }}
          value={false}
          color="red"
          size="lg"
          variant="3d"
        />
      </Group>
    </Stack>
  );
}
`;

export const tooltip: MantineDemo = {
  type: 'code',
  component: () => (
    <Stack gap="lg" align="center">
      <Group>
        <Led tooltip="Server is online" color="green" size="lg" />
        <Led tooltip="Database connected" color="blue" size="lg" variant="3d" />
        <Led tooltip="Service unavailable" value={false} color="red" size="lg" />
      </Group>

      <Text size="sm" c="dimmed">
        With tooltipProps
      </Text>
      <Group>
        <Led
          tooltip="Uptime: 99.9%"
          tooltipProps={{ position: 'bottom', withArrow: true, color: 'green' }}
          color="green"
          size="lg"
          variant="3d"
        />
        <Led
          tooltip="Warning: high latency"
          tooltipProps={{ position: 'right', withArrow: true, color: 'yellow' }}
          color="yellow"
          size="lg"
          variant="3d"
        />
        <Led
          tooltip="Offline since 2h"
          tooltipProps={{
            position: 'bottom',
            withArrow: true,
            color: 'red',
            multiline: true,
            w: 150,
          }}
          value={false}
          color="red"
          size="lg"
          variant="3d"
        />
      </Group>
    </Stack>
  ),
  code,
  defaultExpanded: false,
};
