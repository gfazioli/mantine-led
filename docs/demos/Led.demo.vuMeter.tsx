import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Slider, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Slider, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  const [level, setLevel] = useState(7);

  return (
    <Stack align="center" gap="md">
      <Text size="sm" fw={500}>VU Meter: {level}/10</Text>
      <Led.Group
        value={level}
        count={10}
        colorScale={['green', 'green', 'green', 'yellow', 'yellow', 'orange', 'red', 'red']}
        size="md"
        shape="rectangle"
        variant="flat"
      />
      <Slider value={level} onChange={setLevel} min={0} max={10} step={1} w={250} />
    </Stack>
  );
}
`;

function Demo() {
  const [level, setLevel] = useState(7);

  return (
    <Stack align="center" gap="md">
      <Text size="sm" fw={500}>
        VU Meter: {level}/10
      </Text>
      <Led.Group
        value={level}
        count={10}
        colorScale={['green', 'green', 'green', 'yellow', 'yellow', 'orange', 'red', 'red']}
        size="md"
        shape="rectangle"
        variant="flat"
      />
      <Slider value={level} onChange={setLevel} min={0} max={10} step={1} w={250} />
    </Stack>
  );
}

export const vuMeter: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
