import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, IconSize, Spacing } from '../../../../constants';
import { ButtonIconProps } from '../../types';

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: ButtonIconProps['isDisabled'];
  isSelected: ButtonIconProps['isSelected'];
  iconSize: IconSize;
}

type GetColorStylesProps = Omit<GetDynamicStylesProps, 'iconSize'>;

const getColorStyles = ({
  theme,
  isDisabled,
  isSelected,
}: GetColorStylesProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';
  const selected = isSelected ? 'selected' : 'unselected';

  const colors = {
    selected: {
      disabled: {
        container: {
          backgroundColor: theme.surfaceDisabled,
          borderColor: theme.onSurfaceContrast,
        },
        icon: {
          color: theme.onSurfaceContrast,
        },
        font: {
          color: theme.onSurfaceContrast,
        },
      },
      enabled: {
        container: {
          backgroundColor: theme.primary,
          borderColor: theme.primary,
        },
        icon: {
          color: theme.onPrimary,
        },
        font: {
          color: theme.primary,
        },
      },
    },
    unselected: {
      disabled: {
        container: {
          backgroundColor: theme.surfaceDisabled,
          borderColor: theme.surfaceDisabled,
        },
        icon: {
          color: theme.onSurfaceContrast,
        },
        font: {
          color: theme.onSurfaceContrast,
        },
      },
      enabled: {
        container: {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.primary,
        },
        icon: {
          color: theme.primary,
        },
        font: {
          color: theme.primary,
        },
      },
    },
  };

  return colors[selected][disabled];
};

const getDynamicStyles = ({
  theme,
  isDisabled,
  iconSize,
  isSelected,
}: GetDynamicStylesProps) => {
  const { container, icon, font } = getColorStyles({
    theme,
    isDisabled,
    isSelected,
  });

  return StyleSheet.create({
    container: {
      ...container,
      padding: iconSize * 0.3333,
    },
    icon,
    font,
  });
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.INFINITE,
  },
  border: {
    borderWidth: 0.5,
  },
  title: {
    marginTop: Spacing.X8,
  },
});

export { styles, getDynamicStyles };
