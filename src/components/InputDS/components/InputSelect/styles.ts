import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius } from '../../../../constants';
import { InputSelectProps } from './types';

interface GetDynamicColorsProps {
  theme: Theme;
  isDisabled: InputSelectProps['isDisabled'];
}

interface GetStateColorsProps {
  theme: Theme;
  success: InputSelectProps['success'];
  error: InputSelectProps['error'];
}

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: InputSelectProps['isDisabled'];
  success: InputSelectProps['success'];
  error: InputSelectProps['error'];
}

const getStateColors = ({ theme, success, error }: GetStateColorsProps) => {
  // eslint-disable-next-line no-nested-ternary
  const state = success ? 'success' : error ? 'error' : 'normal';

  const stateColors = {
    normal: {
      selectContainer: { borderColor: theme.surfaceOutline, borderWidth: 1 },
      description: { color: theme.onSurfaceContrast },
    },
    success: {
      selectContainer: { borderColor: theme.surfaceOutline, borderWidth: 1 },
      description: { color: theme.success },
    },
    error: {
      selectContainer: { borderColor: theme.danger, borderWidth: 2 },
      description: { color: theme.danger },
    },
  };

  return stateColors[state];
};

const getDynamicColors = ({ theme, isDisabled }: GetDynamicColorsProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const dynamicColors = {
    disabled: {
      selectContainer: { backgroundColor: theme.surfaceDisabled },
      title: { color: theme.onBackground },
      itemSelected: { color: theme.onSurfaceContrast },
      placeholder: { color: theme.onSurfaceContrast },
      icon: { color: theme.onSurfaceContrast },
    },
    enabled: {
      selectContainer: { backgroundColor: theme.surfaceContainer },
      title: { color: theme.onBackground },
      itemSelected: { color: theme.onSurface },
      placeholder: { color: theme.onSurfaceContrast },
      icon: { color: theme.primary },
    },
  };

  return dynamicColors[disabled];
};

const getDynamicStyles = ({
  theme,
  isDisabled,
  success,
  error,
}: GetDynamicStylesProps) => {
  const {
    selectContainer: dynamicSelectContainer,
    title,
    itemSelected,
    placeholder,
    icon,
  } = getDynamicColors({
    theme,
    isDisabled,
  });
  const { selectContainer: stateSelectContainer, description } = getStateColors(
    { theme, success, error },
  );

  return StyleSheet.create({
    selectContainer: { ...dynamicSelectContainer, ...stateSelectContainer },
    title,
    itemSelected,
    placeholder,
    icon,
    description,
  });
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    marginRight: 8,
  },
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: BorderRadius.MD,
  },
  itemSelected: {
    flex: 1,
    marginRight: 8,
  },
  description: {
    marginTop: 8,
  },
  headerContainerSkeleton: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 8,
  },
  titleContainerSkeleton: {
    flex: 1,
  },
  titleSkeleton: {
    flexGrow: 1,
    height: 20,
    borderRadius: BorderRadius.MD,
    marginRight: 8,
  },
  textUnderlineButtonSkeleton: {
    width: 50,
    height: 20,
    borderRadius: BorderRadius.MD,
  },
  selectedContainerSkeleton: {
    width: '100%',
    height: 56,
    borderRadius: BorderRadius.MD,
  },
  descriptionSkeleton: {
    width: 76,
    height: 20,
    borderRadius: BorderRadius.MD,
    marginVertical: 8,
  },
});

export { styles, getDynamicStyles };
