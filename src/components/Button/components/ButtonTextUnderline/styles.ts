import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, ColorType, Size } from '../../../../constants';

interface DynamicStylesProps {
  theme: Theme;
  colorType: ColorType.PRIMARY | ColorType.DANGER;
}
const getColorsStyles = ({ theme, colorType }: DynamicStylesProps) => {
  const colors = {
    [ColorType.PRIMARY]: {
      font: {
        color: theme.primary,
      },
    },
    [ColorType.DANGER]: {
      font: {
        color: theme.danger,
      },
    },
  };

  return colors[colorType];
};

const getDynamicStyles = ({ theme, colorType }: DynamicStylesProps) => {
  const { font } = getColorsStyles({ theme, colorType });

  return StyleSheet.create({
    font,
  });
};

const getSkeletonStyles = ({ size }: { size: Size }) => {
  let width = 42;
  let height = 24;
  if (size === Size.MEDIUM) {
    width = 37;
    height = 20;
  }

  return StyleSheet.create({
    fontSkeleton: {
      width,
      height,
      borderRadius: BorderRadius.INFINITE,
    },
  });
};

const styles = StyleSheet.create({
  font: {
    textDecorationLine: 'underline',
  },
});

export { getDynamicStyles, getSkeletonStyles, styles };
