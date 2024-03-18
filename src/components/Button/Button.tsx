import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ColorType, Size, Typography } from '~/constants';
import { useDesignSystemContext } from '~/hooks';
import TextDS from '../TextDS';
import { getDynamicStyles, styles } from './styles';

export type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  colorType: ColorType;
  size: Size;
};

const Button = ({
  onPress,
  title,
  style,
  isDisabled,
  isLoading,
  colorType = ColorType.PRIMARY,
  size = Size.LARGE,
}: ButtonProps) => {
  const { theme } = useDesignSystemContext();

  const fontType =
    size === Size.LARGE
      ? Typography.BODY_LARGE_BOLD
      : Typography.BODY_DEFAULT_BOLD;

  const dynamicStyles = getDynamicStyles({
    theme,
    colorType,
    size,
    isDisabled,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size={'small'}
          color={dynamicStyles.font.color}
        />
      );
    }

    return (
      <TextDS
        type={fontType}
        color={dynamicStyles.font.color}
      >
        {title}
      </TextDS>
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPress}
        style={[styles.container, dynamicStyles.container, style]}
      >
        {renderContent()}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;
