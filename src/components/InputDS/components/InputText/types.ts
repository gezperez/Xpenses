import { TextInputProps } from 'react-native';
import { ButtonTextUnderlineProps } from '~/components/Button/types';
import { IconProps } from '~/components/Icon/Icon';
import { InputDSType } from '../../../../constants';
import { CommonInputProps } from '../../types';

export type InputTextProps = {
  type: InputDSType.TEXT;
  isLoading?: boolean;
  iconProps?: { onPress?: () => void } & IconProps;
  title?: string;
  buttonProps?: Omit<ButtonTextUnderlineProps, 'type'>;
  regex?: RegExp;
} & CommonInputProps &
  TextInputProps;
