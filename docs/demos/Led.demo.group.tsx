import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Slider, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Slider, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  const [level, setLevel] = useState(3);

  return (
    <Stack gap="lg" align="center">
      <Text size="sm" fw={500}>Signal strength: {level}/5</Text>
      <Led.Group value={level} count={5} color="green" size="md" variant="3d" />
      <Led.Group value={level} count={5} color="cyan" size="sm" shape="rectangle" />
      <Led.Group
        value={[true, false, true, true, false]}
        color="red"
        size="md"
        animate
        animationType="pulse"
      />
      <Slider
        value={level}
        onChange={setLevel}
        min={0}
        max={5}
        step={1}
        w={200}
        label={(v) => \`\${v}/5\`}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [level, setLevel] = useState(3);

  return (
    <Stack gap="lg" align="center">
      <Text size="sm" fw={500}>
        Signal strength: {level}/5
      </Text>
      <Led.Group value={level} count={5} color="green" size="md" variant="3d" />
      <Led.Group value={level} count={5} color="cyan" size="sm" shape="rectangle" />
      <Led.Group
        value={[true, false, true, true, false]}
        color="red"
        size="md"
        animate
        animationType="pulse"
      />
      <Slider
        value={level}
        onChange={setLevel}
        min={0}
        max={5}
        step={1}
        w={200}
        label={(v) => `${v}/5`}
      />
    </Stack>
  );
}

export const group: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
