import { KeyboardTypeOptions } from 'react-native';
import { InputDSType } from '~/constants';
import { InputConfigType } from './types';

const inputConfig: InputConfigType = {
  [InputDSType.ALPHABETIC]: {
    keyboardType: 'default' as KeyboardTypeOptions,
    regex: /^[a-zA-Z]*$/,
    autoCapitalize: 'sentences',
  },
  [InputDSType.ALPHANUMERIC]: {
    keyboardType: 'default' as KeyboardTypeOptions,
    regex: /^[0-9a-zA-Z]*$/,
    autoCapitalize: 'sentences',
  },
  [InputDSType.NUMERIC]: {
    keyboardType: 'number-pad' as KeyboardTypeOptions,
    regex: /^[0-9]*$/,
    autoCapitalize: 'sentences',
  },
  [InputDSType.MAIL]: {
    keyboardType: 'email-address' as KeyboardTypeOptions,
    regex: /^[ A-Za-z0-9_!#$%&'*+-/=?^`{|}~"(),:;<>@[\]]*$/,
    autoCapitalize: 'none',
  },
};

export default inputConfig;
