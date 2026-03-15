import { Led } from '@gfazioli/mantine-led';
import { MantineDemo } from '@mantinex/demo';
import { LedStylesApi } from '../styles-api/Led.styles-api';

const code = `
import { Led } from "@gfazioli/mantine-led";

function Demo() {
  return (
    <Led{{props}} variant="3d" label="Example Label" size="xl" />
  );
}
`;

function Demo(props: any) {
  return <Led {...props} variant="3d" label="Example Label" size="xl" />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: LedStylesApi,
  component: Demo,
  code,
  centered: true,
};
