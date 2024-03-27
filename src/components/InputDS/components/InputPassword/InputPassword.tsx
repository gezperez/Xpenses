import React, { ForwardedRef, forwardRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon, { IconProps } from '~/components/Icon/Icon';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { InputDSType, Typography } from '../../../../constants';
import InputDS from '../../InputDS';
import { getDynamicStyles, styles } from './styles';
import { CheckerConfig, InputPasswordProps } from './types';

const InputPassword = (
  props: InputPasswordProps,
  ref?: ForwardedRef<TextInput>,
) => {
  const {
    title = 'Password',
    placeholder,
    description,
    secureTextEntry = true,
    onChangeText,
    onIsValidPasswordChange,
    checkerConfig,
    isDisabled,
    containerStyle,
  } = props;

  const [showPasswordText, setShowPasswordText] = useState(!secureTextEntry);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({ theme });

  const accessibilityLabel = `${title ?? ''} ${placeholder ?? ''} ${
    isValidPassword ? 'complete' : 'incomplete'
  }`;

  const iconName: IconProps['name'] = showPasswordText ? 'Eye' : 'EyeOff';

  const handleToggleShowPasswordText = () =>
    setShowPasswordText(!showPasswordText);

  const handleOnChangePassword = (text: string) => {
    setPassword(text);

    if (onChangeText) {
      onChangeText(text);
    }

    const isValid =
      checkerConfig?.find((checker) => checker.validate(text) === false) ===
      undefined;
    if ((!isValid && isValidPassword) || (isValid && !isValidPassword)) {
      setIsValidPassword(isValid);

      if (onIsValidPasswordChange) {
        onIsValidPasswordChange(isValid);
      }
    }
  };

  const renderChecker = () => {
    if (!checkerConfig || isDisabled) {
      return null;
    }

    const renderCheckItem = (checkerItem: CheckerConfig, index: number) => {
      const isValid = checkerItem.validate(password);

      return (
        <View
          key={index.toString()}
          style={styles.checkItem}
        >
          <Icon
            name={'CircleCheck'}
            color={
              isValid
                ? dynamicStyles.checkedIcon.color
                : dynamicStyles.uncheckedIcon.color
            }
            style={styles.checkIcon}
          />
          <TextDS
            type={Typography.BODY_DEFAULT_REGULAR}
            numberOfLines={1}
            color={
              isValid
                ? dynamicStyles.checkedTitle.color
                : dynamicStyles.uncheckedTitle.color
            }
          >
            {checkerItem.title}
          </TextDS>
        </View>
      );
    };

    return (
      <View style={[styles.checkerContainer, dynamicStyles.checkerContainer]}>
        {checkerConfig.map(renderCheckItem)}
      </View>
    );
  };

  return (
    <View
      accessibilityRole="combobox"
      accessibilityLabel={accessibilityLabel}
      style={containerStyle}
    >
      <InputDS
        {...props}
        type={InputDSType.TEXT}
        onChangeText={handleOnChangePassword}
        title={title}
        placeholder={placeholder}
        description={description}
        isDisabled={isDisabled}
        secureTextEntry={!showPasswordText}
        iconProps={{
          name: iconName,
          onPress: handleToggleShowPasswordText,
        }}
        ref={ref}
        containerStyle={undefined}
      />

      {renderChecker()}
    </View>
  );
};

export default forwardRef(InputPassword);
