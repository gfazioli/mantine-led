import React from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { Led } from './Led';

export default {
  title: 'Components/Led',
};

export function Usage() {
  return (
    <Stack gap="xl" p="md">
      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Basic LED States
        </Text>
        <Group>
          <Stack align="center">
            <Led value={true} />
            <Text size="xs">On</Text>
          </Stack>
          <Stack align="center">
            <Led value={false} />
            <Text size="xs">Off</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Variants
        </Text>
        <Group>
          <Stack align="center">
            <Led variant="flat" value={true} />
            <Text size="xs">Flat</Text>
          </Stack>
          <Stack align="center">
            <Led variant="3d" value={true} />
            <Text size="xs">3D</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Sizes
        </Text>
        <Group align="flex-end">
          <Stack align="center">
            <Led size="xs" value={true} />
            <Text size="xs">XS</Text>
          </Stack>
          <Stack align="center">
            <Led size="sm" value={true} />
            <Text size="xs">SM</Text>
          </Stack>
          <Stack align="center">
            <Led size="md" value={true} />
            <Text size="xs">MD</Text>
          </Stack>
          <Stack align="center">
            <Led size="lg" value={true} />
            <Text size="xs">LG</Text>
          </Stack>
          <Stack align="center">
            <Led size="xl" value={true} />
            <Text size="xs">XL</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Colors
        </Text>
        <Group>
          {['red', 'green', 'blue', 'yellow', 'orange', 'cyan', 'pink', 'violet'].map((color) => (
            <Stack key={color} align="center">
              <Led color={color} value={true} variant="3d" size="lg" />
              <Text size="xs" tt="capitalize">
                {color}
              </Text>
            </Stack>
          ))}
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Intensity Levels (3D variant)
        </Text>
        <Group>
          {[20, 40, 60, 80, 100].map((intensity) => (
            <Stack key={intensity} align="center">
              <Led intensity={intensity} value={true} variant="3d" size="lg" />
              <Text size="xs">{intensity}%</Text>
            </Stack>
          ))}
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Animations
        </Text>
        <Group>
          <Stack align="center">
            <Led animate animationType="pulse" value={true} size="lg" />
            <Text size="xs">Pulse</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="flash" value={true} size="lg" color="red" />
            <Text size="xs">Flash</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="breathe" value={true} size="lg" color="blue" />
            <Text size="xs">Breathe</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="blink" value={true} size="lg" color="yellow" />
            <Text size="xs">Blink</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="glow" value={true} size="lg" color="cyan" />
            <Text size="xs">Glow</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Animation Speed
        </Text>
        <Group>
          <Stack align="center">
            <Led animate animationType="pulse" animationDuration={0.5} value={true} size="lg" />
            <Text size="xs">Fast (0.5s)</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="pulse" animationDuration={1.5} value={true} size="lg" />
            <Text size="xs">Normal (1.5s)</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="pulse" animationDuration={3} value={true} size="lg" />
            <Text size="xs">Slow (3s)</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Combined Effects (3D + Animation + High Intensity)
        </Text>
        <Group>
          <Led
            variant="3d"
            animate
            animationType="glow"
            intensity={100}
            value={true}
            size="xl"
            color="green"
          />
          <Led
            variant="3d"
            animate
            animationType="pulse"
            intensity={90}
            value={true}
            size="xl"
            color="red"
          />
          <Led
            variant="3d"
            animate
            animationType="breathe"
            intensity={95}
            value={true}
            size="xl"
            color="blue"
          />
        </Group>
      </Paper>
    </Stack>
  );
}
