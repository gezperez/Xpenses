import { TextInputProps } from 'react-native';
import { InputDSType } from '../../../../constants';
import { CommonInputProps } from '../../types';

export type InputSearchProps = {
  type: InputDSType.SEARCH;
} & CommonInputProps &
  TextInputProps;
