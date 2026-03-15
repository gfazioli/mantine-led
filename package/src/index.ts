import { Led } from './Led';
import { LedGroup } from './LedGroup';

// Attach compound component
(Led as any).Group = LedGroup;

const LedWithGroup = Led as typeof Led & { Group: typeof LedGroup };

export { LedWithGroup as Led, LedGroup };
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
