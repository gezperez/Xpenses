import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from '~/components/Icon';
import Spinner from '~/components/Spinner';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { IconSize, SpinnerSize, Typography } from '../../../../constants';
import { ButtonFloatingProps } from '../../types';
import { getDynamicStyles, styles } from './styles';

const ButtonFloating = ({
  iconProps,
  label,
  isLoading,
  onPress,
  style,
  isDisabled,
}: ButtonFloatingProps) => {
  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({
    theme,
    isLoading,
    label,
    isDisabled,
  });

  const handleOnPress = () => {
    if (!isLoading) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[styles.container, dynamicStyles.container, style]}
      activeOpacity={0.8}
    >
      {!!label && (
        <TextDS
          type={Typography.HEADLINE_H4}
          style={[styles.font, dynamicStyles.font]}
        >
          {label}
        </TextDS>
      )}
      <View style={[styles.iconContainer, dynamicStyles.iconContainer]}>
        {isLoading ? (
          <Spinner
            size={SpinnerSize.LARGE}
            color={dynamicStyles.icon.color}
          />
        ) : (
          <Icon
            {...iconProps}
            color={dynamicStyles.icon.color}
            size={IconSize.LARGE}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFloating;
