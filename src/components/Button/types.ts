import { AccessibilityState, StyleProp, ViewStyle } from 'react-native';
import { ButtonType, ColorType, Size } from '~/constants';
import { IconProps } from '../Icon/Icon';

interface CommonButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isGameMode?: boolean;
  isSkeleton?: boolean;
  accessibilityHint?: string;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
}

export type ButtonTextProps = {
  type: ButtonType.TEXT;
  title: string;
  colorType?: ColorType.PRIMARY | ColorType.SECONDARY | ColorType.DANGER;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: Size;
} & CommonButtonProps;

export type ButtonIconProps = {
  type: ButtonType.ICON;
  iconProps: IconProps;
  isDisabled?: boolean;
  isLoading?: boolean;
} & CommonButtonProps;

export type ButtonProps = ButtonTextProps | ButtonIconProps;
