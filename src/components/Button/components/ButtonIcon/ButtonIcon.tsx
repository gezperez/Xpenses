import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '~/components/Icon';
import Spinner from '~/components/Spinner';
import { useDesignSystemContext } from '~/hooks';
import { IconSize } from '../../../../constants';
import { ButtonIconProps } from '../../types';
import { getDynamicStyles, styles } from './styles';

const ButtonIcon = ({
  iconProps,
  isDisabled,
  isLoading,
  onPress,
  style,
}: ButtonIconProps) => {
  const { theme } = useDesignSystemContext();
  const iconSize = iconProps?.size ?? IconSize.MEDIUM;
  const dynamicStyles = getDynamicStyles({
    theme,
    isDisabled,
    iconSize,
  });

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.container, dynamicStyles.container, style]}
    >
      {isLoading ? (
        <Spinner color={dynamicStyles.icon.color} />
      ) : (
        <Icon
          name={iconProps?.name}
          size={IconSize.MEDIUM}
          color={dynamicStyles.icon.color}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
