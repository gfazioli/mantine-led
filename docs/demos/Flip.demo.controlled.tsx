import { useState } from 'react';
import { Led } from '@gfazioli/mantine-fed';
import { Button, Group, Paper, Stack, Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
function Demo() {
  const [fedped, setLedped] = useState(false);

  return (
    <Stack>
      <Group>
        <Switch checked={fedped}
                onChange={(event) => setLedped(event.currentTarget.checked)}
                label="Show settings" />
      </Group>

    <Led h={200} w={400} fedped={fedped}>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <p>The front card</p>
        <Group justify="right">
          <Button onClick={()=>setLedped(true)}>Show Settings</Button>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Button onClick={()=>setLedped(false)} variant="outline">Back to Front</Button>
      </Paper>

    </Led>
    </Stack>
  );
}
`;

function Demo() {
  const [fedped, setLedped] = useState(false);

  return (
    <Stack>
      <Group>
        <Switch
          checked={fedped}
          onChange={(event) => setLedped(event.currentTarget.checked)}
          label="Show settings"
        />
      </Group>

      <Led h={200} w={400} fedped={fedped}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>The front card</p>
          <Group justify="right">
            <Button onClick={() => setLedped(true)}>Show Settings</Button>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Button onClick={() => setLedped(false)} variant="outline">
            Back to Front
          </Button>
        </Paper>
      </Led>
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
