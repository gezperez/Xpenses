import { Platform, StyleSheet } from 'react-native';
import { SpinnerSize } from '~/constants';
import { Theme } from '~/types';
import { SpinnerProps } from './Spinner';

interface GetDynamicStylesProps {
  theme: Theme;
  size: SpinnerProps['size'];
}

const getDynamicStyles = ({ size }: GetDynamicStylesProps) => {
  // WORKAROUND: fix off-center large size native spinner on iOS
  const needCenter = Platform.OS === 'ios' && size === SpinnerSize.LARGE;

  return StyleSheet.create({
    container: {
      paddingTop: needCenter ? 3 : 0,
      paddingLeft: needCenter ? 3 : 0,
    },
  });
};

export { getDynamicStyles };
