import { Platform, StyleSheet } from 'react-native';
import { Spacing } from '~/constants';

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    paddingTop: 8,
    paddingBottom: Platform.OS === 'android' ? Spacing.X16 : 0,
  },
  description: {
    marginHorizontal: Spacing.X16,
  },
  buttonContainer: {
    marginVertical: Spacing.X8,
  },
  vertical: {
    paddingHorizontal: Spacing.X16,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.X8,
  },
  verticalButton: {
    width: '100%',
  },
  horizontalButton: {
    flex: 1,
    marginHorizontal: Spacing.X8,
  },
  border: {
    borderTopWidth: 1,
  },
  margin: {
    marginTop: Spacing.X16,
  },
  floatingButton: {
    position: 'absolute',
    top: -88,
    right: Spacing.X16,
  },
  paddingBottom: {
    paddingBottom: Spacing.X16,
  },
});

export default styles;
