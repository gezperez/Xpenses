import { StyleProp, ViewStyle } from 'react-native';
import { ButtonType, ColorType, Size } from '~/constants';
import { IconProps } from '../Icon/Icon';

interface CommonButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
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
  title?: string;
  isSelected?: boolean;
  withBorder?: boolean;
} & CommonButtonProps;

export type ButtonTextUnderlineProps = {
  type: ButtonType.TEXT_UNDERLINE;
  label: string;
  colorType?: ColorType.PRIMARY | ColorType.DANGER;
  color?: string;
  size?: Size;
} & CommonButtonProps;

export type ButtonFloatingProps = {
  type: ButtonType.FLOATING;
  iconProps: IconProps;
  label?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
} & CommonButtonProps;

export type ButtonProps =
  | ButtonTextProps
  | ButtonIconProps
  | ButtonTextUnderlineProps
  | ButtonFloatingProps;
