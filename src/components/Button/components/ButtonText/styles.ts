import { StyleSheet } from 'react-native';
import { BorderRadius, ColorType, Size, Spacing } from '~/constants';
import { Theme } from '~/types';
import { Color } from '~/utils';
import { ButtonTextProps } from './ButtonText';

type DynamicStyleProps = {
  theme: Theme;
  isDisabled: ButtonTextProps['isDisabled'];
  colorType: ButtonTextProps['colorType'];
  size: ButtonTextProps['size'];
};

const getColorStyles = ({
  theme,
  isDisabled,
  colorType,
}: DynamicStyleProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const colors = {
    [ColorType.PRIMARY]: {
      disabled: {
        container: {
          backgroundColor: theme.surfaceDisabled,
        },
        font: {
          color: theme.onSurfaceContrast,
        },
      },
      enabled: {
        container: {
          backgroundColor: theme.primary,
        },
        font: {
          color: theme.onPrimary,
        },
      },
    },
    [ColorType.SECONDARY]: {
      disabled: {
        container: {
          backgroundColor: undefined,
          borderWidth: 2,
          borderColor: theme.surfaceDisabled,
        },
        font: {
          color: theme.primary,
        },
      },
      enabled: {
        container: {
          backgroundColor: undefined,
          borderWidth: 2,
          borderColor: theme.primary,
        },
        font: {
          color: theme.primary,
        },
      },
    },
    [ColorType.DANGER]: {
      disabled: {
        container: {
          backgroundColor: theme.surfaceDisabled,
        },
        font: {
          color: theme.onSurfaceContrast,
        },
      },
      enabled: {
        container: {
          backgroundColor: theme.danger,
        },
        font: {
          color: theme.onDanger,
        },
      },
    },
  };

  return colors[colorType][disabled];
};

const getSizeStyles = ({ colorType, size }: DynamicStyleProps) => {
  const sizes = {
    [Size.SMALL]: {
      [ColorType.PRIMARY]: {
        minHeight: Spacing.X40,
        paddingVertical: Spacing.X10,
        paddingHorizontal: Spacing.X16,
      },
      [ColorType.SECONDARY]: {
        minHeight: Spacing.X40,
        paddingVertical: Spacing.X8,
        paddingHorizontal: Spacing.X14,
      },
      [ColorType.DANGER]: {
        minHeight: Spacing.X40,
        paddingVertical: Spacing.X10,
        paddingHorizontal: Spacing.X16,
      },
    },
    [Size.MEDIUM]: {
      [ColorType.PRIMARY]: {
        minHeight: Spacing.X48,
        paddingVertical: Spacing.X14,
        paddingHorizontal: Spacing.X24,
      },
      [ColorType.SECONDARY]: {
        minHeight: Spacing.X48,
        paddingVertical: Spacing.X12,
        paddingHorizontal: Spacing.X22,
      },
      [ColorType.DANGER]: {
        minHeight: Spacing.X48,
        paddingVertical: Spacing.X14,
        paddingHorizontal: Spacing.X24,
      },
    },
    [Size.LARGE]: {
      [ColorType.PRIMARY]: {
        minHeight: Spacing.X56,
        paddingVertical: Spacing.X16,
        paddingHorizontal: Spacing.X32,
      },
      [ColorType.SECONDARY]: {
        minHeight: Spacing.X56,
        paddingVertical: Spacing.X14,
        paddingHorizontal: Spacing.X30,
      },
      [ColorType.DANGER]: {
        minHeight: Spacing.X56,
        paddingVertical: Spacing.X16,
        paddingHorizontal: Spacing.X32,
      },
    },
  };

  return sizes[size][colorType];
};

const getDynamicStyles = ({
  theme,
  isDisabled,
  colorType,
  size,
}: DynamicStyleProps) => {
  const colorStyles = getColorStyles({ theme, isDisabled, colorType, size });

  const sizeStyles = getSizeStyles({ theme, isDisabled, colorType, size });

  const container = { ...colorStyles.container, ...sizeStyles };

  return StyleSheet.create({
    container,
    font: colorStyles.font,
  });
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.LG,
    backgroundColor: Color.PRIMARY,
  },
  disabled: {
    backgroundColor: Color.GRAY,
  },
});

export { getDynamicStyles, styles };
