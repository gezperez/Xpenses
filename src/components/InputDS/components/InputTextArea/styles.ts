/* eslint-disable no-nested-ternary */
import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, Spacing } from '../../../../constants';
import { InputTextAreaProps } from './types';

interface GetStaticStylesProps {
  theme: Theme;
  focus: boolean | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
}

interface GetDynamicColorsProps {
  theme: Theme;
  isDisabled: InputTextAreaProps['isDisabled'];
}

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: InputTextAreaProps['isDisabled'];
  focus: boolean | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
}

const getStateColors = ({
  theme,
  focus,
  success,
  error,
}: GetStaticStylesProps) => {
  const borderColor = focus ? 'focus' : error ? 'error' : 'normal';
  const descriptionColor = error ? 'error' : success ? 'success' : 'normal';

  const borderColors = {
    focus: {
      inputContainer: { borderColor: theme.secondary, borderWidth: 2 },
    },
    error: {
      inputContainer: { borderColor: theme.danger, borderWidth: 2 },
    },
    normal: {
      inputContainer: { borderColor: theme.surfaceOutline, borderWidth: 1 },
    },
  };

  const descriptionColors = {
    success: {
      descriptionText: { color: theme.success },
    },
    error: {
      descriptionText: { color: theme.danger },
    },
    normal: {
      descriptionText: { color: theme.onSurfaceContrast },
    },
  };

  return {
    ...borderColors[borderColor],
    ...descriptionColors[descriptionColor],
  };
};

const getDynamicColors = ({ theme, isDisabled }: GetDynamicColorsProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const dynamicColors = {
    disabled: {
      title: { color: theme.onBackground },
      inputContainer: {
        backgroundColor: theme.surfaceDisabled,
      },
      placeholderText: {
        color: theme.onSurfaceContrast,
      },
      inputText: {
        color: theme.onSurfaceContrast,
      },
    },
    enabled: {
      title: { color: theme.onBackground },
      inputContainer: {
        backgroundColor: theme.surfaceContainer,
      },
      placeholderText: {
        color: theme.onSurfaceContrast,
      },
      inputText: {
        color: theme.onSurface,
      },
    },
  };

  return dynamicColors[disabled];
};

const getDynamicStyles = ({
  theme,
  isDisabled,
  focus,
  success,
  error,
}: GetDynamicStylesProps) => {
  const {
    title,
    inputContainer: dynamicInputContainer,
    placeholderText,
    inputText,
  } = getDynamicColors({ theme, isDisabled });
  const { inputContainer: staticInputContainer, descriptionText } =
    getStateColors({
      theme,
      focus,
      success,
      error,
    });

  return StyleSheet.create({
    title,
    inputContainer: { ...dynamicInputContainer, ...staticInputContainer },
    placeholderText,
    inputText,
    descriptionText,
  });
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginBottom: Spacing.X8,
  },
  title: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    padding: Spacing.X16,
    borderRadius: BorderRadius.MD,
    minHeight: 136,
  },
  input: {
    flex: 1,
    marginBottom: Spacing.X8,
    minHeight: 80,
    paddingVertical: 0,
  },
  descriptionText: {
    marginTop: Spacing.X8,
  },
  headerContainerSkeleton: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: Spacing.X8,
  },
  titleContainerSkeleton: {
    flex: 1,
  },
  titleSkeleton: {
    flexGrow: 1,
    height: 20,
    borderRadius: BorderRadius.MD,
  },
  titleSeparatorSkeleton: {
    marginRight: Spacing.X8,
  },
  textUnderlineButtonSkeleton: {
    width: 56,
    height: 20,
    borderRadius: BorderRadius.MD,
  },
  inputSkeleton: {
    width: '100%',
    height: 136,
    borderRadius: BorderRadius.MD,
  },
  descriptionSkeleton: {
    width: '100%',
    height: 20,
    borderRadius: BorderRadius.MD,
    marginTop: Spacing.X8,
  },
});

export { styles, getDynamicStyles };
