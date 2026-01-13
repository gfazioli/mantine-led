import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Button, Group, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <Stack align="center">
      <Led value={active} size="xl" />
      <Group>
        <Button onClick={() => setActive(true)} variant="light" color="green">
          Turn On
        </Button>
        <Button onClick={() => setActive(false)} variant="light" color="red">
          Turn Off
        </Button>
        <Button onClick={() => setActive((current) => !current)} variant="light">
          Toggle
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <Stack align="center">
      <Led value={active} size="xl" />
      <Group>
        <Button onClick={() => setActive(true)} variant="light" color="green">
          Turn On
        </Button>
        <Button onClick={() => setActive(false)} variant="light" color="red">
          Turn Off
        </Button>
        <Button onClick={() => setActive((current) => !current)} variant="light">
          Toggle
        </Button>
      </Group>
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
