import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Typography } from '~/constants';
import { useDesignSystemContext } from '~/hooks';
import TextDS from '../TextDS';
import { getDynamicStyles, styles } from './styles';

export type TabOption =
  | string
  | { label: string; value: string }
  | { label: string; value: number };

export interface TabProps<T extends TabOption> {
  selectedOption: T;
  options: T[];
  onOptionChange: (option: T) => void;
  isDisabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Tab = <T extends TabOption>({
  selectedOption,
  options,
  onOptionChange,
  isDisabled,
  containerStyle,
}: TabProps<T>) => {
  const { theme } = useDesignSystemContext();
  const dynamicStyles = getDynamicStyles({ theme, isDisabled });

  const renderOption = (
    option: TabProps<T>['selectedOption'],
    index: number,
  ) => {
    const label =
      typeof selectedOption === 'string'
        ? selectedOption
        : selectedOption.label;
    const optionContainerStyle =
      option === selectedOption
        ? dynamicStyles.selectedOptionContainer
        : undefined;
    const isSelected = option === selectedOption;
    const optionTextStyle =
      option === selectedOption
        ? dynamicStyles.selectedOptionText
        : dynamicStyles.unselectedOptionText;

    const handleOnPressOption = () => onOptionChange(option);

    return (
      <TouchableOpacity
        key={index}
        onPress={handleOnPressOption}
        disabled={isDisabled}
        activeOpacity={0.8}
        style={[styles.optionContainer, optionContainerStyle]}
        accessibilityLabel={label}
        accessibilityState={{ selected: isSelected }}
      >
        <TextDS
          type={Typography.BODY_DEFAULT_BOLD}
          numberOfLines={1}
          style={optionTextStyle}
        >
          {label}
        </TextDS>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, dynamicStyles.container, containerStyle]}>
      {options.map(renderOption)}
    </View>
  );
};

export default Tab;
