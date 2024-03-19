import React from 'react';
import { ButtonType } from '../../constants';
import { ButtonIcon, ButtonText } from './components';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  switch (props.type) {
    case ButtonType.TEXT:
      return <ButtonText {...props} />;
    case ButtonType.ICON:
      return <ButtonIcon {...props} />;
    default:
      return null;
  }
};

export default Button;
