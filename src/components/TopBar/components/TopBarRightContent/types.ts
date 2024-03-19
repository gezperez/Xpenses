import { IconProps } from '~/components/Icon/Icon';
import { TopBarRightContentType } from '~/constants';

type OneIconContentProps = {
  iconProps: IconProps;
  onPress: () => void;
  type: TopBarRightContentType.ICON;
};

type TwoIconsContentProps = {
  leftIconProps: IconProps;
  onPressLeftIcon: () => void;
  rightIconProps: IconProps;
  onPressRightIcon: () => void;
  type: TopBarRightContentType.TWO_ICONS;
};

export type TopBarRightContentProps =
  | OneIconContentProps
  | TwoIconsContentProps;
