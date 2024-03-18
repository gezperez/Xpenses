import React from 'react';
import { StyleProp, Text, TextProps, ViewStyle } from 'react-native';
import { Typography, TypographyVariant } from '~/constants';
import styles from './styles';

export type TypographyType = keyof typeof TypographyVariant;

type TextDSProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
  upperCase?: boolean;
  type?: Typography;
  alignCenter?: boolean;
} & TextProps;

const getFontStyle = (type?: Typography) => {
  if (type) {
    return TypographyVariant[type];
  }

  return TypographyVariant.bodyDefaultRegular;
};

const TextDS = (props: TextDSProps) => {
  const { children, color, style, upperCase, type, alignCenter } = props;

  return (
    <Text
      {...props}
      style={[
        getFontStyle(type),
        !!upperCase && styles.upperCase,
        alignCenter && styles.alignCenter,
        !!color && { color },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextDS;
