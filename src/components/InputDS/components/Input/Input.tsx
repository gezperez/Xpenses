import React, { ForwardedRef, forwardRef, useState } from 'react';
import { TextInput } from 'react-native';
import { InputDSType } from '../../../../constants';
import InputDS from '../../InputDS';
import inputConfig from './inputConfig';
import { InputProps } from './types';

const Input = (props: InputProps, ref?: ForwardedRef<TextInput>) => {
  const { type, value, onChangeText } = props;

  const [currentValue, setCurrentValue] = useState(value ?? '');

  const handleOnChangeText = (text: string) => {
    setCurrentValue(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <InputDS
      {...props}
      type={InputDSType.TEXT}
      keyboardType={inputConfig[type].keyboardType}
      value={currentValue}
      onChangeText={handleOnChangeText}
      regex={inputConfig[type].regex}
      autoCapitalize={inputConfig[type].autoCapitalize}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
