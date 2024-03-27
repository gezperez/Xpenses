import { ForwardedRef } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { InputProps } from './components/Input/types';
import { InputMoneyProps } from './components/InputMoney/types';
import { InputPasswordProps } from './components/InputPassword/types';
import { InputPhoneNumberProps } from './components/InputPhoneNumber/types';
import { InputSearchProps } from './components/InputSearch/types';
import { InputSelectProps } from './components/InputSelect/types';
import { InputTextProps } from './components/InputText/types';
import { InputTextAreaProps } from './components/InputTextArea/types';

export type CommonInputProps = {
  ref?: ForwardedRef<TextInput>;
  containerStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  description?: string;
  error?: boolean;
  success?: boolean;
  isLocked?: boolean;
};

export type InputDSProps =
  | InputSearchProps
  | InputSelectProps
  | InputTextAreaProps
  | InputTextProps
  | InputPasswordProps
  | InputPhoneNumberProps
  | InputMoneyProps
  | InputProps;
