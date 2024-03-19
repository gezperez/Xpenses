import { StyleSheet } from 'react-native';
import { BorderRadius } from '~/constants';
import { Theme } from '~/types';
import { TabProps } from './Tab';

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: TabProps<any>['isDisabled'];
}

const getDynamicColors = ({ theme, isDisabled }: GetDynamicStylesProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const colors = {
    disabled: {
      container: { backgroundColor: theme.surfaceContainer },
      selectedOptionContainer: {
        backgroundColor: theme.surfaceDisabled,
      },
      selectedOptionText: { color: theme.onSurfaceContrast },
      unselectedOptionText: { color: theme.onSurfaceContrast },
    },
    enabled: {
      container: { backgroundColor: theme.surfaceContainer },
      selectedOptionContainer: { backgroundColor: theme.primary },
      selectedOptionText: { color: theme.onPrimary },
      unselectedOptionText: { color: theme.primary },
    },
  };

  return colors[disabled];
};

const getDynamicStyles = ({ theme, isDisabled }: GetDynamicStylesProps) => {
  const {
    container,
    selectedOptionContainer,
    selectedOptionText,
    unselectedOptionText,
  } = getDynamicColors({
    theme,
    isDisabled,
  });

  return StyleSheet.create({
    container,
    selectedOptionContainer,
    selectedOptionText,
    unselectedOptionText,
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: BorderRadius.INFINITE,
  },
  optionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: BorderRadius.INFINITE,
  },
  containerSkeleton: {
    width: '100%',
    height: 56,
    borderRadius: BorderRadius.INFINITE,
  },
});

export { styles, getDynamicStyles };
