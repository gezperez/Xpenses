import React from 'react';
import { TouchableOpacity } from 'react-native';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { ColorType, Size, Typography } from '../../../../constants';
import { ButtonTextUnderlineProps } from '../../types';
import { getDynamicStyles, styles } from './styles';

const ButtonTextUnderline = ({
  label,
  colorType = ColorType.PRIMARY,
  onPress,
  color,
  size = Size.MEDIUM,
  style,
  accessibilityLabel,
  accessibilityHint,
}: ButtonTextUnderlineProps) => {
  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({ theme, colorType });
  const fontColor = color ?? dynamicStyles.font.color;
  const fontTypography =
    size === Size.LARGE ? Typography.LINK_LARGE : Typography.LINK_DEFAULT;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={style}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
      <TextDS
        type={fontTypography}
        color={fontColor}
        style={styles.font}
      >
        {label}
      </TextDS>
    </TouchableOpacity>
  );
};

export default ButtonTextUnderline;
