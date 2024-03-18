import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { useSystemContext } from '~/hooks';
import { Color } from '~/utils';
import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
};

const Button = ({
  onPress,
  title,
  style,
  isDisabled,
  isLoading,
}: ButtonProps) => {
  const { theme } = useSystemContext();

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator color={Color.PRIMARY} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPress}
        style={[
          styles.container,
          isDisabled && styles.disabled,
          style,
          { backgroundColor: theme.danger },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;
