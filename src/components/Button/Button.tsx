import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ColorType, Size } from '~/enums';
import { useDesignSystemContext } from '~/hooks';
import { Color } from '~/utils';
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

  const dynamicStyles = getDynamicStyles({
    theme,
    colorType,
    size,
    isDisabled,
  });

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator color={Color.PRIMARY} />
      </SafeAreaView>
    );
  }

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color={theme.onDanger} />;
    }

    return <Text style={dynamicStyles.font}>{title}</Text>;
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
