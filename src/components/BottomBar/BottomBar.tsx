import React, { ReactNode } from 'react';
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native';
import { ButtonType, ColorType, Typography } from '~/constants';
import { useDesignSystemContext, useKeyboard } from '~/hooks';
import Button from '../Button/Button';
import { ButtonTextProps } from '../Button/types';
import TextDS from '../TextDS';
import { TextDSProps } from '../TextDS/TextDS';
import styles from './styles';

type TextButton = Omit<ButtonTextProps, 'type'>;

export type BottomBarProps = {
  primaryButton?: TextButton;
  secondaryButton?: TextButton;
  descriptionProps?: TextDSProps & {
    description?: string;
    renderComponent?: () => ReactNode;
  };
  style?: StyleProp<ViewStyle>;
  isGameMode?: boolean;
  isHorizontal?: boolean;
  accessibilityLabel?: string;
};

const BottomBar = ({
  primaryButton,
  secondaryButton,
  descriptionProps,
  style,
  isHorizontal,
  accessibilityLabel,
}: BottomBarProps) => {
  const { theme } = useDesignSystemContext();

  const showBorder = primaryButton || secondaryButton || descriptionProps;

  const isKeyboardShown = useKeyboard();

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        showBorder && styles.border,
        {
          backgroundColor: theme.background,
          borderColor: theme.surfaceOutline,
        },
        style,
      ]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="menu"
    >
      <View style={[styles.container, isKeyboardShown && styles.paddingBottom]}>
        {descriptionProps &&
          descriptionProps.renderComponent &&
          descriptionProps.renderComponent()}
        {descriptionProps && descriptionProps.description && (
          <TextDS
            {...descriptionProps}
            alignCenter
            type={Typography.BODY_DEFAULT_REGULAR}
            color={theme.onSurface}
            style={[styles.description, descriptionProps.style]}
          >
            {descriptionProps.description}
          </TextDS>
        )}
        <View
          style={[
            styles.buttonContainer,
            isHorizontal ? styles.horizontal : styles.vertical,
          ]}
        >
          {primaryButton && (
            <Button
              type={ButtonType.TEXT}
              {...primaryButton}
              style={[
                isHorizontal ? styles.horizontalButton : styles.verticalButton,
              ]}
            />
          )}
          {secondaryButton && (
            <Button
              type={ButtonType.TEXT}
              {...secondaryButton}
              colorType={ColorType.SECONDARY}
              style={[
                !isHorizontal && styles.margin,
                isHorizontal ? styles.horizontalButton : styles.verticalButton,
              ]}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomBar;
