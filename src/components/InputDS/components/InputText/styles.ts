/* eslint-disable no-nested-ternary */
import { Platform, StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, Spacing } from '../../../../constants';
import { InputTextProps } from './types';

interface GetStaticStylesProps {
  theme: Theme;
  focus: boolean | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
}

interface GetDynamicColorsProps {
  theme: Theme;
  isDisabled: InputTextProps['isDisabled'];
}

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: InputTextProps['isDisabled'];
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
  const borderColor = focus ? 'focus' : error ? 'error' : 'unfocus';
  const descriptionColor = error ? 'error' : success ? 'success' : 'normal';

  const borderColors = {
    focus: {
      inputContainer: {
        borderColor: theme.secondary,
        borderWidth: 2,
        borderRadius: BorderRadius.MD,
      },
    },
    error: {
      inputContainer: {
        borderColor: theme.danger,
        borderWidth: 2,
        borderRadius: BorderRadius.MD,
      },
    },
    unfocus: {
      inputContainer: {
        borderColor: theme.surfaceOutline,
        borderWidth: 1,
        borderRadius: BorderRadius.MD,
      },
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
      rightIcon: {
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
      rightIcon: {
        color: theme.primary,
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
    rightIcon,
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
    rightIcon,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    minHeight: 60,
    padding: 16,
  },
  rightIcon: {
    marginLeft: Spacing.X8,
    marginVertical: Platform.OS === 'ios' ? 0 : Spacing.X16,
    marginRight: Spacing.X16,
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
  contentContainerSkeleton: {
    flexDirection: 'row',
    flex: 1,
  },
  inputContainerSkeleton: {
    flex: 1,
  },
  inputSkeleton: {
    width: '100%',
    height: 56,
    borderRadius: BorderRadius.MD,
  },
  iconRightSkeleton: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.MD,
    marginLeft: Spacing.X8,
  },
  descriptionSkeleton: {
    width: '100%',
    height: 20,
    borderRadius: BorderRadius.MD,
    marginTop: Spacing.X8,
  },
});

export { styles, getDynamicStyles };
