import { ButtonTextUnderlineProps } from '~/components/Button/types';
import { InputDSType } from '../../../../constants';
import { CommonInputProps } from '../../types';

export type InputSelectProps = {
  type: InputDSType.SELECT;
  title?: string;
  textUnderlineButtonProps?: ButtonTextUnderlineProps;
  placeholder?: string;
  itemSelected?: string;
  onPress: () => void;
} & CommonInputProps;
