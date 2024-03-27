import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, Spacing } from '../../../../constants';

interface GetDynamicStylesProps {
  theme: Theme;
}

interface GetDynamicSkeletonStylesProps {
  checkerLength: number;
}

const getDynamicColors = ({ theme }: GetDynamicStylesProps) => {
  const colors = {
    checkerContainer: { backgroundColor: theme.surfaceContainer },
    uncheckedIcon: { color: theme.surfaceDisabled },
    checkedIcon: { color: theme.success },
    uncheckedTitle: { color: theme.onSurfaceContrast },
    checkedTitle: { color: theme.success },
  };

  return colors;
};

const getDynamicStyles = ({ theme }: GetDynamicStylesProps) => {
  const {
    checkerContainer,
    uncheckedIcon,
    checkedIcon,
    uncheckedTitle,
    checkedTitle,
  } = getDynamicColors({
    theme,
  });

  return StyleSheet.create({
    checkerContainer,
    uncheckedIcon,
    checkedIcon,
    uncheckedTitle,
    checkedTitle,
  });
};

const getDynamicSkeletonStyles = ({
  checkerLength,
}: GetDynamicSkeletonStylesProps) =>
  StyleSheet.create({
    checkerContainerSkeleton: {
      height: 24 + checkerLength * 32,
    },
  });

const styles = StyleSheet.create({
  checkerContainer: {
    marginTop: Spacing.X8,
    paddingVertical: 12,
    paddingHorizontal: Spacing.X16,
    borderRadius: BorderRadius.MD,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.X4,
  },
  checkIcon: {
    marginRight: Spacing.X8,
  },
  checkerContainerSkeleton: {
    width: '100%',
    borderRadius: BorderRadius.MD,
    marginTop: Spacing.X8,
  },
});

export { styles, getDynamicStyles, getDynamicSkeletonStyles };
