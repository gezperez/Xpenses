import { KeyboardTypeOptions } from 'react-native';
import { InputDSType } from '../../../../constants';
import { InputTextProps } from '../InputText/types';

export type InputAlphabeticProps = {
  type: InputDSType.ALPHABETIC;
} & Omit<InputTextProps, 'type'>;

export type InputAlphanumericProps = {
  type: InputDSType.ALPHANUMERIC;
} & Omit<InputTextProps, 'type'>;

export type InputNumericProps = {
  type: InputDSType.NUMERIC;
} & Omit<InputTextProps, 'type'>;

export type InputMailProps = {
  type: InputDSType.MAIL;
} & Omit<InputTextProps, 'type'>;

export type InputProps =
  | InputAlphabeticProps
  | InputAlphanumericProps
  | InputNumericProps
  | InputMailProps;

export type InputConfigType = {
  [key in
    | InputDSType.ALPHABETIC
    | InputDSType.ALPHANUMERIC
    | InputDSType.NUMERIC
    | InputDSType.MAIL]: {
    keyboardType: KeyboardTypeOptions;
    regex: RegExp;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  };
};
