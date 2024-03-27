import { TextInputProps } from 'react-native';
import { ButtonTextUnderlineProps } from '~/components/Button/types';
import { InputDSType } from '../../../../constants';
import { CommonInputProps } from '../../types';

export type InputTextAreaProps = {
  type: InputDSType.TEXT_AREA;
  title?: string;
  buttonProps?: Omit<ButtonTextUnderlineProps, 'type'>;
} & CommonInputProps &
  TextInputProps;
