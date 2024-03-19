import { TopBarLeftContentType } from '~/constants';

type IconContentProps = {
  iconProps: IconProps;
  onPress: () => void;
  accessibilityLabel?: string;
  type: TopBarLeftContentType.ICON;
};

type TwoIconsContentProps = {
  leftIconProps: IconProps;
  onPressLeftIcon: () => void;
  leftIconAccessibilityLabel?: string;
  rightIconProps: IconProps;
  onPressRightIcon: () => void;
  rightIconAccessibilityLabel?: string;
  type: TopBarLeftContentType.TWO_ICONS;
};

type DefaultContentProps = {
  onBackPress: () => void;
  accessibilityLabel?: string;
  type: TopBarLeftContentType.DEFAULT;
};

export type TopBarLeftContentProps =
  | IconContentProps
  | TwoIconsContentProps
  | DefaultContentProps;
