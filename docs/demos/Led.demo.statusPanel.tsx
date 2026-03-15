import { Led } from '@gfazioli/mantine-led';
import { Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Paper p="xl" withBorder>
      <Stack gap="lg">
        <Title order={3}>System Status Panel</Title>

        <SimpleGrid cols={2}>
          <Stack gap="md">
            <Text fw={800}>Network</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Internet"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Connected — 142ms latency"
                />
                <Led
                  label="LAN"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="192.168.1.0/24"
                />
                <Led
                  value={false}
                  label="VPN"
                  offColor="red"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Disconnected"
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Services</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Database"
                  color="green"
                  labelPosition="left"
                  animate
                  animationType="blink"
                  animationCount={3}
                  justify="space-between"
                  variant="3d"
                  tooltip="Replication in progress..."
                />
                <Led
                  label="API Server"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Uptime: 14d 3h"
                />
                <Led
                  label="Cache"
                  color="yellow"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Hit rate: 78% — consider scaling"
                  tooltipProps={{ color: 'yellow' }}
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Resources</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="CPU Load"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="12% average"
                />
                <Led
                  label="Memory"
                  color="yellow"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="6.2 / 8 GB used"
                  tooltipProps={{ color: 'yellow' }}
                />
                <Led
                  label="Disk Space"
                  color="red"
                  labelPosition="left"
                  animate
                  animationType="flash"
                  animationCount={5}
                  justify="space-between"
                  variant="3d"
                  tooltip="92% full — action required"
                  tooltipProps={{ color: 'red' }}
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Security</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Firewall"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="All rules active"
                />
                <Led
                  label="SSL Cert"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  value={false}
                  offColor="red"
                  variant="3d"
                  tooltip="Expired 2 days ago!"
                  tooltipProps={{ color: 'red' }}
                />
                <Led
                  label="Auth Service"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="OAuth 2.0 — 0 failed attempts"
                />
              </Stack>
            </Paper>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
`;

function Demo() {
  return (
    <Paper p="xl" withBorder>
      <Stack gap="lg">
        <Title order={3}>System Status Panel</Title>

        <SimpleGrid cols={2}>
          <Stack gap="md">
            <Text fw={800}>Network</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Internet"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Connected — 142ms latency"
                />
                <Led
                  label="LAN"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="192.168.1.0/24"
                />
                <Led
                  value={false}
                  label="VPN"
                  offColor="red"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Disconnected"
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Services</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Database"
                  color="green"
                  labelPosition="left"
                  animate
                  animationType="blink"
                  animationCount={3}
                  justify="space-between"
                  variant="3d"
                  tooltip="Replication in progress..."
                />
                <Led
                  label="API Server"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Uptime: 14d 3h"
                />
                <Led
                  label="Cache"
                  color="yellow"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="Hit rate: 78% — consider scaling"
                  tooltipProps={{ color: 'yellow' }}
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Resources</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="CPU Load"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="12% average"
                />
                <Led
                  label="Memory"
                  color="yellow"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="6.2 / 8 GB used"
                  tooltipProps={{ color: 'yellow' }}
                />
                <Led
                  label="Disk Space"
                  color="red"
                  labelPosition="left"
                  animate
                  animationType="flash"
                  animationCount={5}
                  justify="space-between"
                  variant="3d"
                  tooltip="92% full — action required"
                  tooltipProps={{ color: 'red' }}
                />
              </Stack>
            </Paper>
          </Stack>

          <Stack gap="md">
            <Text fw={800}>Security</Text>
            <Paper withBorder p="md">
              <Stack gap="xs">
                <Led
                  label="Firewall"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="All rules active"
                />
                <Led
                  label="SSL Cert"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  value={false}
                  offColor="red"
                  variant="3d"
                  tooltip="Expired 2 days ago!"
                  tooltipProps={{ color: 'red' }}
                />
                <Led
                  label="Auth Service"
                  color="green"
                  labelPosition="left"
                  justify="space-between"
                  variant="3d"
                  tooltip="OAuth 2.0 — 0 failed attempts"
                />
              </Stack>
            </Paper>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}

export const statusPanel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
