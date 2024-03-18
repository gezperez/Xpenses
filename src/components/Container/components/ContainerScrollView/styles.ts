import { StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.X16,
    paddingBottom: Spacing.X16,
  },
});

export default styles;
