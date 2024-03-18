import { Platform, StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Spacing.X16 : 0,
  },
});

export default styles;
