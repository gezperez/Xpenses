import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: width / 3,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
