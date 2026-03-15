import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Stack, Text } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(false);

  return (
    <Stack align="center" gap="md">
      <Text size="sm" c="dimmed">Click the LEDs to toggle them</Text>
      <Group>
        <Led
          value={value1}
          onChange={setValue1}
          size="xl"
          variant="3d"
          label="Power"
        />
        <Led
          value={value2}
          onChange={setValue2}
          size="xl"
          variant="3d"
          color="blue"
          label="Network"
        />
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(false);

  return (
    <Stack align="center" gap="md">
      <Text size="sm" c="dimmed">
        Click the LEDs to toggle them
      </Text>
      <Group>
        <Led value={value1} onChange={setValue1} size="xl" variant="3d" label="Power" />
        <Led
          value={value2}
          onChange={setValue2}
          size="xl"
          variant="3d"
          color="blue"
          label="Network"
        />
      </Group>
    </Stack>
  );
}

export const onChange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
