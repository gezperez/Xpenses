import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from '~/components/Icon';
import Spinner from '~/components/Spinner';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { IconSize, Typography } from '../../../../constants';
import { ButtonIconProps } from '../../types';
import { getDynamicStyles, styles } from './styles';

const ButtonIcon = ({
  iconProps,
  isDisabled,
  isLoading,
  isSelected,
  onPress,
  style,
  title,
  withBorder,
}: ButtonIconProps) => {
  const { theme } = useDesignSystemContext();
  const iconSize = iconProps?.size ?? IconSize.MEDIUM;
  const dynamicStyles = getDynamicStyles({
    theme,
    isDisabled,
    iconSize,
    isSelected,
  });

  return (
    <View style={[styles.mainContainer, style]}>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPress}
        style={[
          styles.container,
          withBorder && styles.border,
          dynamicStyles.container,
        ]}
      >
        {isLoading ? (
          <Spinner color={dynamicStyles.icon.color} />
        ) : (
          <Icon
            name={iconProps?.name}
            size={iconProps?.size}
            color={dynamicStyles.icon.color}
          />
        )}
      </TouchableOpacity>
      {title && (
        <TextDS
          type={Typography.BODY_LARGE_REGULAR}
          style={styles.title}
          color={dynamicStyles.font.color}
        >
          {title}
        </TextDS>
      )}
    </View>
  );
};

export default ButtonIcon;
