import { StyleSheet } from 'react-native';
import { BorderRadius, Spacing } from '../../../../constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentSkeleton: {
    minHeight: 24,
    borderRadius: BorderRadius.INFINITE,
  },
  title: {
    marginBottom: Spacing.X8,
  },
});

export default styles;
