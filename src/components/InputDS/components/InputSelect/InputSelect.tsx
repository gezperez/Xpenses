import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import TextDS from '~/components/TextDS';
import { ButtonType, Typography } from '../../../../constants';
import { useDesignSystemContext } from '../../../../hooks';
import { getDynamicStyles, styles } from './styles';
import { InputSelectProps } from './types';

const InputSelect = ({
  isDisabled,
  title,
  textUnderlineButtonProps,
  description,
  placeholder = 'Select',
  itemSelected,
  error,
  success,
  containerStyle,
  onPress,
  isLocked,
}: InputSelectProps) => {
  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({
    theme,
    isDisabled: isDisabled || isLocked,
    success,
    error,
  });

  const renderHeader = () => {
    if (!title && !textUnderlineButtonProps) {
      return null;
    }

    return (
      <View style={styles.headerContainer}>
        <TextDS
          type={Typography.BODY_DEFAULT_BOLD}
          style={[styles.title, dynamicStyles.title]}
          accessibilityLabel={title}
        >
          {title}
        </TextDS>
        {textUnderlineButtonProps && (
          <Button
            {...textUnderlineButtonProps}
            type={ButtonType.TEXT_UNDERLINE}
          />
        )}
      </View>
    );
  };

  const renderItemSelected = () => {
    if (!itemSelected) {
      return (
        <TextDS
          type={Typography.BODY_DEFAULT_REGULAR}
          numberOfLines={1}
          style={[styles.itemSelected, dynamicStyles.placeholder]}
          accessibilityLabel={placeholder}
        >
          {placeholder}
        </TextDS>
      );
    }

    return (
      <TextDS
        type={Typography.BODY_DEFAULT_REGULAR}
        numberOfLines={1}
        style={[styles.itemSelected, dynamicStyles.itemSelected]}
        accessibilityLabel={itemSelected}
      >
        {itemSelected}
      </TextDS>
    );
  };

  const renderRightIcon = () => {
    if (isLocked) {
      return (
        <Icon
          name={'Lock'}
          color={dynamicStyles.icon.color}
        />
      );
    }

    return (
      <Icon
        name={'ArrowDown'}
        color={dynamicStyles.icon.color}
      />
    );
  };

  return (
    <View style={containerStyle}>
      {renderHeader()}

      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled || isLocked}
        activeOpacity={0.8}
        style={[styles.selectContainer, dynamicStyles.selectContainer]}
      >
        {renderItemSelected()}
        {renderRightIcon()}
      </TouchableOpacity>

      {!!description && (
        <TextDS
          type={Typography.BODY_DEFAULT_REGULAR}
          style={[styles.description, dynamicStyles.description]}
          accessibilityLabel={description}
        >
          {description}
        </TextDS>
      )}
    </View>
  );
};

export default InputSelect;
