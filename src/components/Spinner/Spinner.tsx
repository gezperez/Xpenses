import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { SpinnerSize } from '~/constants';
import { useDesignSystemContext } from '~/hooks';

export type SpinnerProps = {
  color?: string;
  size?: SpinnerSize;
  style?: StyleProp<ViewStyle>;
};

const Spinner = ({ style, color, size = SpinnerSize.MEDIUM }: SpinnerProps) => {
  const { theme } = useDesignSystemContext();

  const getSize = () => (size === SpinnerSize.LARGE ? 'large' : 'small');

  const getScale = () => {
    switch (size) {
      case SpinnerSize.LARGE: // Scale 36px to 32px
        return { transform: [{ scaleX: 0.888888 }, { scaleY: 0.888888 }] };
      case SpinnerSize.MEDIUM: // Scale 20px to 20px
        return undefined;
      case SpinnerSize.SMALL: // Scale 20px to 12px
        return { transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] };
      default:
        return undefined;
    }
  };

  return (
    <ActivityIndicator
      size={getSize()}
      color={color ?? theme.onSurface}
      style={[getScale(), style]}
    />
  );
};

export default Spinner;
