import React from 'react';
import { ButtonType } from '../../constants';
import {
  ButtonFloating,
  ButtonIcon,
  ButtonText,
  ButtonTextUnderline,
} from './components';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  switch (props.type) {
    case ButtonType.TEXT:
      return <ButtonText {...props} />;
    case ButtonType.ICON:
      return <ButtonIcon {...props} />;
    case ButtonType.TEXT_UNDERLINE:
      return <ButtonTextUnderline {...props} />;
    case ButtonType.FLOATING:
      return <ButtonFloating {...props} />;
    default:
      return null;
  }
};

export default Button;
