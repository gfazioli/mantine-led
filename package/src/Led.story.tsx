import React, { useState } from 'react';
import { Divider, Group, Paper, Stack, Text } from '@mantine/core';
import { LedGroup } from './Group';
import { Led, type LedProps } from './Led';
import { LedMatrix } from './Matrix';
import { LedSevenSegment } from './SevenSegment';

export default {
  title: 'Components/Led',
  args: {
    size: 'md',
    radius: 'xl',
    value: true,
    variant: 'flat',
    intensity: 80,
    animate: false,
    animationType: 'none',
    animationDuration: 1.5,
    shape: 'circle',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'color',
    },
    offColor: {
      control: 'color',
    },
    variant: {
      control: 'select',
      options: ['flat', '3d', 'neon', 'dot'],
    },
    intensity: {
      control: { type: 'range', min: 0, max: 100, step: 10 },
    },
    animationType: {
      control: 'select',
      options: ['none', 'pulse', 'flash', 'breathe', 'blink', 'glow'],
    },
    animationDuration: {
      control: { type: 'range', min: 0.5, max: 10, step: 0.5 },
    },
    animationCount: {
      control: { type: 'number', min: 1, max: 20 },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rectangle'],
    },
    tooltip: {
      control: 'text',
    },
  },
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
            <Led />
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
            <Led variant="flat" />
            <Text size="xs">Flat</Text>
          </Stack>
          <Stack align="center">
            <Led variant="3d" />
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
            <Led size="xs" />
            <Text size="xs">XS</Text>
          </Stack>
          <Stack align="center">
            <Led size="sm" />
            <Text size="xs">SM</Text>
          </Stack>
          <Stack align="center">
            <Led size="md" />
            <Text size="xs">MD</Text>
          </Stack>
          <Stack align="center">
            <Led size="lg" />
            <Text size="xs">LG</Text>
          </Stack>
          <Stack align="center">
            <Led size="xl" />
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
              <Led color={color} variant="3d" size="lg" />
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
              <Led intensity={intensity} variant="3d" size="lg" />
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
            <Led animate animationType="pulse" size="lg" />
            <Text size="xs">Pulse</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="flash" size="lg" color="red" />
            <Text size="xs">Flash</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="breathe" size="lg" color="blue" />
            <Text size="xs">Breathe</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="blink" size="lg" color="yellow" />
            <Text size="xs">Blink</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="glow" size="lg" color="cyan" />
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
            <Led animate animationType="pulse" animationDuration={0.5} size="lg" />
            <Text size="xs">Fast (0.5s)</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="pulse" animationDuration={1.5} size="lg" />
            <Text size="xs">Normal (1.5s)</Text>
          </Stack>
          <Stack align="center">
            <Led animate animationType="pulse" animationDuration={3} size="lg" />
            <Text size="xs">Slow (3s)</Text>
          </Stack>
        </Group>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Combined Effects (3D + Animation + High Intensity)
        </Text>
        <Group>
          <Led variant="3d" animate animationType="glow" intensity={100} size="xl" color="green" />
          <Led variant="3d" animate animationType="pulse" intensity={90} size="xl" color="red" />
          <Led variant="3d" animate animationType="breathe" intensity={95} size="xl" color="blue" />
        </Group>
      </Paper>
    </Stack>
  );
}

export function WithProps(props: LedProps) {
  return <Led {...props} />;
}

export function WithLabel() {
  return (
    <>
      <Group>
        <Led label="Server Online" color="green" />
        <Led label="Server Offline" color="red" value={false} />
        <Led label={<Text c="blue">Custom Label</Text>} color="blue" />
      </Group>
      <Divider />
      <div>
        <Led label="Left Label" labelPosition="left" color="orange" />
      </div>

      <div>
        <Led label="Right Label" labelPosition="right" color="pink" />
      </div>

      <Divider />
      <Stack>
        <Led label="Left Label" labelPosition="left" color="orange" />

        <Led label="Right Label" labelPosition="right" color="pink" />
      </Stack>
    </>
  );
}

export function Shapes() {
  return (
    <Group p="md">
      <Stack align="center">
        <Led shape="circle" size="lg" variant="3d" />
        <Text size="xs">Circle</Text>
      </Stack>
      <Stack align="center">
        <Led shape="square" size="lg" variant="3d" />
        <Text size="xs">Square</Text>
      </Stack>
      <Stack align="center">
        <Led shape="rectangle" size="lg" variant="3d" />
        <Text size="xs">Rectangle</Text>
      </Stack>
    </Group>
  );
}

export function OffColor() {
  return (
    <Group p="md">
      <Stack align="center">
        <Led value={false} offColor="red" color="green" size="xl" variant="3d" />
        <Text size="xs">Off (red)</Text>
      </Stack>
      <Stack align="center">
        <Led value offColor="red" color="green" size="xl" variant="3d" />
        <Text size="xs">On (green)</Text>
      </Stack>
    </Group>
  );
}

export function Interactive() {
  const [value, setValue] = useState(true);

  return (
    <Stack align="center" p="md">
      <Text size="sm">Click the LED to toggle</Text>
      <Led value={value} onChange={setValue} size="xl" variant="3d" label="Toggle me" />
    </Stack>
  );
}

export function WithTooltip() {
  return (
    <Group p="md">
      <Led tooltip="Server is online" color="green" size="lg" />
      <Led tooltip="Database connected" color="blue" size="lg" variant="3d" />
      <Led tooltip="Service unavailable" value={false} color="red" size="lg" />
    </Group>
  );
}

export function AnimationCount() {
  return (
    <Group p="md">
      <Stack align="center">
        <Led animate animationType="flash" animationCount={3} size="lg" color="red" />
        <Text size="xs">3 flashes</Text>
      </Stack>
      <Stack align="center">
        <Led animate animationType="pulse" animationCount={5} size="lg" color="blue" />
        <Text size="xs">5 pulses</Text>
      </Stack>
      <Stack align="center">
        <Led animate animationType="glow" size="lg" color="green" />
        <Text size="xs">Infinite</Text>
      </Stack>
    </Group>
  );
}

export function LedGroupStory() {
  const [level, setLevel] = useState(3);

  return (
    <Stack p="md" gap="xl">
      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Numeric value (first N active)
        </Text>
        <LedGroup value={3} count={5} color="green" size="md" variant="3d" />
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Boolean array
        </Text>
        <LedGroup value={[true, false, true, true, false]} color="red" size="md" />
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Rectangle shape
        </Text>
        <LedGroup value={level} count={5} color="cyan" size="sm" shape="rectangle" />
        <div style={{ marginTop: 16 }}>
          <input
            type="range"
            min={0}
            max={5}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
        </div>
      </Paper>

      <Paper p="md" withBorder>
        <Text fw={500} mb="md">
          Vertical direction
        </Text>
        <LedGroup value={2} count={4} direction="column" color="orange" size="md" variant="3d" />
      </Paper>
    </Stack>
  );
}

export function Variants() {
  return (
    <Group p="md">
      {(['flat', '3d', 'neon', 'dot'] as const).map((v) => (
        <Stack key={v} align="center">
          <Led variant={v} size="xl" />
          <Led variant={v} size="xl" value={false} />
          <Text size="xs" tt="capitalize">
            {v}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}

export function NeonVariant() {
  return (
    <Group p="md" bg="dark.9" style={{ borderRadius: 8, padding: 32 }}>
      {['red', 'green', 'blue', 'cyan', 'pink', 'yellow'].map((color) => (
        <Led key={color} variant="neon" size="xl" color={color} />
      ))}
    </Group>
  );
}

export function Gradient() {
  return (
    <Group p="md">
      <Led gradient={{ from: 'red', to: 'orange', deg: 45 }} size="xl" />
      <Led gradient={{ from: 'blue', to: 'cyan', deg: 90 }} size="xl" variant="3d" />
      <Led gradient={{ from: 'grape', to: 'pink' }} size="xl" variant="neon" />
      <Led gradient={{ from: 'teal', to: 'lime' }} size="xl" variant="dot" />
    </Group>
  );
}

export function CascadeAnimation() {
  return (
    <Stack p="md" gap="xl">
      <LedGroup
        value={8}
        count={8}
        animate
        animationType="pulse"
        animationDelay={0.15}
        size="lg"
        color="cyan"
        variant="3d"
      />
      <LedGroup
        value={6}
        count={6}
        animate
        animationType="glow"
        animationDelay={0.2}
        size="lg"
        color="violet"
        variant="neon"
      />
    </Stack>
  );
}

export function VUMeter() {
  const [level, setLevel] = useState(7);
  return (
    <Stack p="md" align="center">
      <LedGroup
        value={level}
        count={10}
        colorScale={['green', 'green', 'green', 'yellow', 'yellow', 'orange', 'red', 'red']}
        size="md"
        shape="rectangle"
      />
      <input
        type="range"
        min={0}
        max={10}
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
      />
    </Stack>
  );
}

export function MatrixStory() {
  const heart = [
    [false, true, false, true, false],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [false, true, true, true, false],
    [false, false, true, false, false],
  ];

  return (
    <Group p="md">
      <LedMatrix value={heart} color="red" size="sm" />
      <LedMatrix rows={4} cols={8} color="green" size="xs" />
    </Group>
  );
}

export function SevenSegmentStory() {
  return (
    <Stack p="md" gap="xl">
      <LedSevenSegment value={1234} color="red" size="lg" />
      <LedSevenSegment value="12:30" color="green" size="md" />
      <LedSevenSegment value="HELLO" color="cyan" size="sm" />
      <LedSevenSegment value={42} color="orange" size="xl" />
    </Stack>
  );
}
