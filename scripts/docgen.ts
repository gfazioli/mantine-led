import path from 'path';
import { generateDeclarations } from 'mantine-docgen-script';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  componentsPaths: [
    getComponentPath('Led.tsx'),
    getComponentPath('Group/LedGroup.tsx'),
    getComponentPath('Matrix/LedMatrix.tsx'),
    getComponentPath('SevenSegment/LedSevenSegment.tsx'),
  ],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
});
