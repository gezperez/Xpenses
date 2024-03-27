import React from 'react';
import { TextType } from '~/constants';
import TextScreen from './components/TextScreen';
import { TextSection } from './components';
import { TextViewProps } from './types';

const TextView = (props: TextViewProps) => {
  switch (props.type) {
    case TextType.TEXT_SCREEN:
      return <TextScreen {...props} />;
    case TextType.TEXT_SECTION:
      return <TextSection {...props} />;
    default:
      return <></>;
  }
};

export default TextView;
