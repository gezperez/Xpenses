import { StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  container: {
    paddingBottom: Spacing.X16,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.X16,
  },
  emptyTopBar: {
    height: Spacing.X48,
  },
});

export default styles;
