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
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '~/components/Button';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { ButtonType, Typography } from '../../../../constants';
import { getDynamicStyles, styles } from './styles';
import { InputTextAreaProps } from './types';

const InputTextArea = (
  props: InputTextAreaProps,
  ref?: ForwardedRef<TextInput>,
) => {
  const {
    containerStyle,
    autoFocus,
    onFocus,
    onBlur,
    description,
    value,
    onChangeText,
    maxLength = 200,
    isDisabled,
    success,
    error,
    title,
    buttonProps,
  } = props;

  const innerRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  const [currentValue, setCurrentValue] = useState(value);
  const [focus, setFocus] = useState(autoFocus);

  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({
    theme,
    isDisabled,
    focus,
    success,
    error,
  });

  const placeholder = focus ? '' : props.placeholder;
  const charactersLeft = maxLength - (currentValue?.length ?? 0);
  const charactersLeftText = `(${charactersLeft} characters left)`;

  const handleOnChangeText = (text: string) => {
    setCurrentValue(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

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

  return (
    <View style={containerStyle}>
      {renderHeader()}

      <TouchableWithoutFeedback
        onPress={handleOnPress}
        disabled={isDisabled}
      >
        <View style={[styles.inputContainer, dynamicStyles.inputContainer]}>
          <TextInput
            {...props}
            ref={innerRef}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholder={placeholder}
            value={currentValue}
            onChangeText={handleOnChangeText}
            placeholderTextColor={dynamicStyles.placeholderText.color}
            editable={!isDisabled}
            maxLength={maxLength}
            multiline
            numberOfLines={4}
            scrollEnabled={false}
            textAlignVertical="top"
            style={[styles.input, dynamicStyles.inputText]}
          />
          <TextDS
            type={Typography.BODY_SMALL_REGULAR}
            style={dynamicStyles.inputText}
          >
            {charactersLeftText}
          </TextDS>
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

export default forwardRef(InputTextArea);
