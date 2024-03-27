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
import Icon from '~/components/Icon';
import TextDS from '~/components/TextDS';
import { Typography } from '~/constants';
import { useDesignSystemContext } from '~/hooks';
import { getDynamicStyles, styles } from './styles';
import { InputSearchProps } from './types';

const InputSearch = (
  props: InputSearchProps,
  ref?: ForwardedRef<TextInput>,
) => {
  const {
    containerStyle,
    autoFocus,
    onFocus,
    onBlur,
    placeholder = 'Search...',
    description,
    value,
    onChangeText,
    isDisabled,
    success,
    error,
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

  const renderClearButton = () => {
    if (!currentValue || isDisabled) {
      return null;
    }

    const handleClearInput = () => handleOnChangeText('');

    return (
      <TouchableOpacity
        onPress={handleClearInput}
        activeOpacity={0.8}
        style={styles.clearButton}
      >
        <Icon
          name={'CircleX'}
          color={dynamicStyles.clearButton.color}
        />
      </TouchableOpacity>
    );
  };

  const getAccessibilityHint = () => {
    if (error) {
      return `Error, ${description ?? ''}`;
    }

    return description;
  };

  return (
    <View
      accessible
      accessibilityRole="search"
      accessibilityLabel="Search"
      accessibilityHint={getAccessibilityHint()}
    >
      <TouchableWithoutFeedback
        onPress={handleOnPress}
        disabled={isDisabled}
      >
        <View style={containerStyle}>
          <View style={[styles.inputContainer, dynamicStyles.inputContainer]}>
            <Icon
              name={'Search'}
              color={dynamicStyles.searchIcon.color}
              style={styles.leftIcon}
            />
            <TextInput
              {...props}
              ref={innerRef}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              value={currentValue}
              onChangeText={handleOnChangeText}
              placeholder={placeholder}
              placeholderTextColor={dynamicStyles.placeholderText.color}
              editable={!isDisabled}
              style={[styles.input, dynamicStyles.inputText]}
            />
            {renderClearButton()}
          </View>
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
      </TouchableWithoutFeedback>
    </View>
  );
};

export default forwardRef(InputSearch);
