import { Led } from './Led';
import { LedGroup } from './LedGroup';
import { LedMatrix } from './LedMatrix';
import { LedSevenSegment } from './LedSevenSegment';

// Attach compound components
(Led as any).Group = LedGroup;
(Led as any).Matrix = LedMatrix;
(Led as any).SevenSegment = LedSevenSegment;

const LedWithCompounds = Led as typeof Led & {
  Group: typeof LedGroup;
  Matrix: typeof LedMatrix;
  SevenSegment: typeof LedSevenSegment;
};

export { LedWithCompounds as Led, LedGroup, LedMatrix, LedSevenSegment };
export type {
  LedAnimationType,
  LedBaseProps,
  LedCssVariables,
  LedFactory,
  LedProps,
  LedShape,
  LedStylesNames,
  LedVariant,
} from './Led';
export type {
  LedGroupCssVariables,
  LedGroupFactory,
  LedGroupProps,
  LedGroupStylesNames,
} from './LedGroup';
export type {
  LedMatrixCssVariables,
  LedMatrixFactory,
  LedMatrixProps,
  LedMatrixStylesNames,
} from './LedMatrix';
export type {
  LedSevenSegmentCssVariables,
  LedSevenSegmentFactory,
  LedSevenSegmentProps,
  LedSevenSegmentStylesNames,
} from './LedSevenSegment';
