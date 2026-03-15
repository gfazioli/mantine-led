import { useState } from 'react';
import { Led } from '@gfazioli/mantine-led';
import { Stack, Text, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function getStrength(password: string): number {
  let score = 0;
  if (password.length >= 4) {
    score++;
  }
  if (password.length >= 8) {
    score++;
  }
  if (/[A-Z]/.test(password)) {
    score++;
  }
  if (/[0-9]/.test(password)) {
    score++;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  }
  return score;
}

const LABELS = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];

const code = `
import { useState } from 'react';
import { Stack, Text, TextInput } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function getStrength(password: string): number {
  let score = 0;
  if (password.length >= 4) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return score;
}

const LABELS = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];

function Demo() {
  const [password, setPassword] = useState('');
  const strength = getStrength(password);

  return (
    <Stack gap="md" w={300} mx="auto">
      <TextInput
        label="Password"
        placeholder="Type a password..."
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Led.Group
        value={strength}
        count={5}
        colorScale={['red', 'orange', 'yellow', 'lime', 'green']}
        size="sm"
        shape="rectangle"
        gap="xs"
      />
      <Text size="xs" c="dimmed" ta="center">
        {password.length > 0 ? LABELS[strength - 1] || 'Too short' : 'Enter a password'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const [password, setPassword] = useState('');
  const strength = getStrength(password);

  return (
    <Stack gap="md" w={300} mx="auto">
      <TextInput
        label="Password"
        placeholder="Type a password..."
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Led.Group
        value={strength}
        count={5}
        colorScale={['red', 'orange', 'yellow', 'lime', 'green']}
        size="sm"
        shape="rectangle"
        gap="xs"
      />
      <Text size="xs" c="dimmed" ta="center">
        {password.length > 0 ? LABELS[strength - 1] || 'Too short' : 'Enter a password'}
      </Text>
    </Stack>
  );
}

export const passwordStrength: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
