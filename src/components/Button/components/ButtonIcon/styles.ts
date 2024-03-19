import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, IconSize } from '../../../../constants';
import { ButtonIconProps } from '../../types';

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: ButtonIconProps['isDisabled'];
  iconSize: IconSize;
}

type GetColorStylesProps = Omit<GetDynamicStylesProps, 'iconSize'>;

const getColorStyles = ({ theme, isDisabled }: GetColorStylesProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const colors = {
    disabled: {
      container: {
        backgroundColor: theme.surfaceContainer,
      },
      icon: {
        color: theme.primary,
      },
    },
    enabled: {
      container: {
        backgroundColor: theme.surfaceContainer,
      },
      icon: {
        color: theme.primary,
      },
    },
  };

  return colors[disabled];
};

const getDynamicStyles = ({
  theme,
  isDisabled,
  iconSize,
}: GetDynamicStylesProps) => {
  const { container, icon } = getColorStyles({ theme, isDisabled });

  return StyleSheet.create({
    container: {
      ...container,
      padding: iconSize * 0.3333,
    },
    icon,
  });
};

const getSkeletonDynamicStyles = ({ iconSize }: { iconSize: IconSize }) =>
  StyleSheet.create({
    container: {
      padding: iconSize * 0.8333,
    },
  });

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.INFINITE,
  },
});

export { styles, getDynamicStyles, getSkeletonDynamicStyles };
