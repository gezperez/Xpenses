import React, { ForwardedRef, forwardRef } from 'react';
import { TextInput } from 'react-native';
import { InputDSType } from '~/constants';
import {
  Input,
  InputMoney,
  InputPassword,
  InputPhoneNumber,
  InputSearch,
  InputSelect,
  InputText,
  InputTextArea,
} from './components';
import { InputDSProps } from './types';

const InputDS = (props: InputDSProps, ref?: ForwardedRef<TextInput>) => {
  switch (props.type) {
    case InputDSType.SEARCH:
      return (
        <InputSearch
          {...props}
          ref={ref}
        />
      );
    case InputDSType.SELECT:
      return <InputSelect {...props} />;
    case InputDSType.TEXT_AREA:
      return (
        <InputTextArea
          {...props}
          ref={ref}
        />
      );
    case InputDSType.TEXT:
      return (
        <InputText
          {...props}
          ref={ref}
        />
      );
    case InputDSType.PASSWORD:
      return (
        <InputPassword
          {...props}
          ref={ref}
        />
      );
    case InputDSType.PHONE_NUMBER:
      return (
        <InputPhoneNumber
          {...props}
          ref={ref}
        />
      );
    case InputDSType.MONEY:
      return (
        <InputMoney
          {...props}
          ref={ref}
        />
      );
    case InputDSType.ALPHABETIC:
    case InputDSType.ALPHANUMERIC:
    case InputDSType.NUMERIC:
    case InputDSType.MAIL:
      return (
        <Input
          {...props}
          ref={ref}
        />
      );
    default:
      return <></>;
  }
};

export default forwardRef(InputDS);
