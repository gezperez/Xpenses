import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius } from '../../../../constants';
import { ButtonFloatingProps } from '../../types';

interface GetDynamicStylesProps {
  theme: Theme;
  isLoading: ButtonFloatingProps['isLoading'];
  label: ButtonFloatingProps['label'];
  isDisabled: ButtonFloatingProps['isDisabled'];
}

type GetColorsStylesProps = Omit<GetDynamicStylesProps, 'isLoading'>;

const getColorsStyles = ({
  theme,
  label,
  isDisabled,
}: GetColorsStylesProps) => {
  const withLabel = label ? 'withLabel' : 'withoutLabel';

  const disabled = isDisabled ? 'disabled' : 'enabled';

  const colors = {
    withLabel: {
      enabled: {
        container: {
          backgroundColor: theme.primary,
        },
        font: {
          color: theme.onPrimary,
        },
        iconContainer: {},
        icon: {
          color: theme.onPrimary,
        },
      },
      disabled: {
        container: {
          backgroundColor: theme.onPrimary,
        },
        font: {
          color: theme.primary,
        },
        iconContainer: {
          backgroundColor: theme.primary,
        },
        icon: {
          color: theme.onPrimary,
        },
      },
    },
    withoutLabel: {
      enabled: {
        container: {
          backgroundColor: theme.primary,
        },
        font: {},
        iconContainer: {},
        icon: {
          color: theme.onPrimary,
        },
      },
      disabled: {
        container: {
          backgroundColor: theme.primary,
        },
        font: {},
        iconContainer: {},
        icon: {
          color: theme.onPrimary,
        },
      },
    },
  };

  return colors[withLabel][disabled];
};

const getDynamicStyles = ({
  theme,
  isLoading,
  label,
  isDisabled,
}: GetDynamicStylesProps) => {
  const { container, font, iconContainer, icon } = getColorsStyles({
    theme,
    label,
    isDisabled,
  });

  return StyleSheet.create({
    container: {
      ...container,
      opacity: isLoading ? 0.8 : 1,
    },
    font,
    iconContainer,
    icon,
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 56,
    minHeight: 56,
    borderRadius: BorderRadius.INFINITE,
  },
  font: {
    marginRight: 8,
    marginLeft: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.INFINITE,
  },
  labelSkeleton: {
    width: 123,
  },
});

export { styles, getDynamicStyles };
