import { StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  rightIcon: {
    marginRight: Spacing.X4 + Spacing.X8,
  },
  icon: {
    width: 40,
    height: 40,
    margin: Spacing.X4,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 104,
  },
  scoreContainer: {
    width: 104,
    alignItems: 'flex-end',
  },
  buttonSpace: {
    flex: 1,
  },
});

export default styles;
