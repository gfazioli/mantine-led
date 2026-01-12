import { Led } from '@gfazioli/mantine-led';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return <Led value />;
}
`;

export const basic: MantineDemo = {
  type: 'code',
  component: () => <Led value />,
  code,
};
