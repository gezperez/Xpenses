import { StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightIcon: {
    marginLeft: Spacing.X4 + Spacing.X8,
  },
  icon: {
    width: 40,
    height: 40,
    margin: Spacing.X4,
  },
});

export default styles;
