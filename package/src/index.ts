import { Led } from './Led';
import { LedGroup } from './LedGroup';
import { LedMatrix } from './LedMatrix';
import { LedSevenSegment } from './LedSevenSegment';

// Attach compound components (typed, no `any`)
const LedWithCompounds = Object.assign(Led, {
  Group: LedGroup,
  Matrix: LedMatrix,
  SevenSegment: LedSevenSegment,
});

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
