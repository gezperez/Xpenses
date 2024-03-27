import { StyleSheet } from 'react-native';
import { Theme } from '~/types';
import { BorderRadius, Spacing } from '../../../../constants';
import { InputSearchProps } from './types';

interface GetStaticStylesProps {
  theme: Theme;
  focus: boolean | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
}

interface GetDynamicColorsProps {
  theme: Theme;
  isDisabled: InputSearchProps['isDisabled'];
}

interface GetDynamicStylesProps {
  theme: Theme;
  isDisabled: InputSearchProps['isDisabled'];
  focus: boolean | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
}

const getStaticColors = ({
  theme,
  focus,
  success,
  error,
}: GetStaticStylesProps) => {
  const isFocus = focus ? 'focus' : 'unfocus';
  // eslint-disable-next-line no-nested-ternary
  const status = success ? 'success' : error ? 'error' : 'normal';

  const staticColors = {
    focus: {
      normal: {
        inputContainer: {
          borderColor: theme.secondary,
          borderWidth: 2,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.onSurfaceContrast,
        },
      },
      success: {
        inputContainer: {
          borderColor: theme.secondary,
          borderWidth: 2,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.success,
        },
      },
      error: {
        inputContainer: {
          borderColor: theme.danger,
          borderWidth: 2,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.danger,
        },
      },
    },
    unfocus: {
      normal: {
        inputContainer: {
          borderColor: theme.surfaceOutline,
          borderWidth: 1,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.onSurfaceContrast,
        },
      },
      success: {
        inputContainer: {
          borderColor: theme.surfaceOutline,
          borderWidth: 1,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.success,
        },
      },
      error: {
        inputContainer: {
          borderColor: theme.surfaceOutline,
          borderWidth: 1,
          borderRadius: BorderRadius.INFINITE,
        },
        descriptionText: {
          color: theme.danger,
        },
      },
    },
  };

  return staticColors[isFocus][status];
};

const getDynamicColors = ({ theme, isDisabled }: GetDynamicColorsProps) => {
  const disabled = isDisabled ? 'disabled' : 'enabled';

  const dynamicColors = {
    disabled: {
      inputContainer: {
        backgroundColor: theme.surfaceDisabled,
      },
      searchIcon: {
        color: theme.onSurfaceContrast,
      },
      placeholderText: {
        color: theme.onSurfaceContrast,
      },
      inputText: {
        color: theme.onSurfaceContrast,
      },
      clearButton: {
        color: theme.onSurfaceContrast,
      },
    },
    enabled: {
      inputContainer: {
        backgroundColor: theme.surfaceContainer,
      },
      searchIcon: {
        color: theme.primary,
      },
      placeholderText: {
        color: theme.onSurfaceContrast,
      },
      inputText: {
        color: theme.onSurface,
      },
      clearButton: {
        color: theme.onSurfaceContrast,
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
    inputContainer: dynamicInputContainer,
    searchIcon,
    placeholderText,
    inputText,
    clearButton,
  } = getDynamicColors({ theme, isDisabled });
  const { inputContainer: staticInputContainer, descriptionText } =
    getStaticColors({
      theme,
      focus,
      success,
      error,
    });

  return StyleSheet.create({
    inputContainer: { ...dynamicInputContainer, ...staticInputContainer },
    searchIcon,
    placeholderText,
    inputText,
    clearButton,
    descriptionText,
  });
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    minHeight: 60,
  },
  clearButton: {
    marginLeft: 8,
    marginRight: Spacing.X16,
  },
  descriptionText: {
    marginTop: 8,
  },
  descriptionTextSkeleton: {
    marginVertical: 10,
    width: 76,
    height: 20,
    borderRadius: BorderRadius.MD,
  },
  leftIcon: {
    marginLeft: Spacing.X16,
  },
});

export { styles, getDynamicStyles };
