import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Spinner from '~/components/Spinner';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { ButtonType, SpinnerSize, Typography } from '../../../../constants';
import { getDynamicStyles, styles } from './styles';
import { InputTextProps } from './types';

const InputText = (props: InputTextProps, ref?: ForwardedRef<TextInput>) => {
  const {
    containerStyle,
    autoFocus,
    onFocus,
    onBlur,
    onChangeText,
    description,
    isDisabled,
    isLoading,
    success,
    error,
    title,
    buttonProps,
    iconProps,
    isLocked,
    regex,
  } = props;

  const innerRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  const [focus, setFocus] = useState(autoFocus);

  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({
    theme,
    isDisabled: isDisabled || isLocked,
    focus,
    success,
    error,
  });

  const disabled = isDisabled || isLoading || isLocked;
  const placeholder = focus ? '' : props.placeholder;

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleOnChangeText = (text: string) => {
    if (onChangeText && (!regex || regex.test(text))) {
      onChangeText(text);
    }
  };

  const handleOnPress = () => {
    innerRef.current?.focus();
  };

  const renderHeader = () => {
    if (!title && !buttonProps) {
      return null;
    }

    return (
      <View style={styles.headerContainer}>
        <TextDS
          type={Typography.BODY_DEFAULT_BOLD}
          style={[styles.title, dynamicStyles.title]}
        >
          {title}
        </TextDS>
        {buttonProps && (
          <Button
            {...buttonProps}
            type={ButtonType.TEXT_UNDERLINE}
          />
        )}
      </View>
    );
  };

  const renderRightIcon = () => {
    if (isLocked) {
      return (
        <Icon
          name={'Lock'}
          color={dynamicStyles.rightIcon.color}
          style={styles.rightIcon}
        />
      );
    }

    if (isLoading) {
      return (
        <Spinner
          size={SpinnerSize.MEDIUM}
          color={dynamicStyles.rightIcon.color}
          style={styles.rightIcon}
        />
      );
    }

    if (iconProps) {
      if (iconProps.onPress) {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={iconProps.onPress}
            disabled={disabled}
          >
            <Icon
              {...iconProps}
              color={dynamicStyles.rightIcon.color}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        );
      }

      return (
        <Icon
          {...iconProps}
          color={dynamicStyles.rightIcon.color}
          style={styles.rightIcon}
        />
      );
    }

    return null;
  };

  return (
    <View style={containerStyle}>
      {renderHeader()}

      <TouchableWithoutFeedback
        onPress={handleOnPress}
        disabled={disabled}
      >
        <View style={[styles.inputContainer, dynamicStyles.inputContainer]}>
          <TextInput
            {...props}
            ref={innerRef}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChangeText={handleOnChangeText}
            placeholder={placeholder}
            placeholderTextColor={dynamicStyles.placeholderText.color}
            editable={!disabled}
            style={[styles.input, dynamicStyles.inputText]}
          />
          {renderRightIcon()}
        </View>
      </TouchableWithoutFeedback>

      {!!description && (
        <TextDS
          type={Typography.BODY_DEFAULT_REGULAR}
          accessibilityLabel={description}
          style={[styles.descriptionText, dynamicStyles.descriptionText]}
        >
          {description}
        </TextDS>
      )}
    </View>
  );
};

export default forwardRef(InputText);
