import { StyleSheet } from 'react-native';
import { Color } from '~/utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: Color.PRIMARY,
    height: 50,
  },
  disabled: {
    backgroundColor: Color.GRAY,
  },
  title: {
    color: Color.WHITE,
    fontWeight: '700',
    fontSize: 17,
  },
});

export default styles;
