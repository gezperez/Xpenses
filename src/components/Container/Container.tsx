import React from 'react';
import { RefreshControlProps, StatusBar, View } from 'react-native';
import { useDesignSystemContext } from '~/hooks';
import BottomBar, { BottomBarProps } from '../BottomBar/BottomBar';
import ContainerDSScrollView, {
  ContainerDSScrollViewContentProps,
} from './components/ContainerScrollView/ContainerScrollView';
import styles from './styles';

type ContainerDefaultContentProps = {
  refreshControlOptions?: RefreshControlProps;
  keyboardAware?: boolean;
};

type ContainerContentProps = ContainerDSScrollViewContentProps &
  ContainerDefaultContentProps;

type ContainerProps = {
  contentProps: ContainerContentProps;
  bottomBarProps?: BottomBarProps;
};

const Container = ({ contentProps, bottomBarProps }: ContainerProps) => {
  const { theme, isDarkTheme } = useDesignSystemContext();

  const barStyle = isDarkTheme ? 'light-content' : 'dark-content';

  const renderFooter = () =>
    bottomBarProps ? <BottomBar {...bottomBarProps} /> : <View />;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <StatusBar
        animated
        barStyle={barStyle}
        backgroundColor={'transparent'}
        translucent
      />
      <ContainerDSScrollView
        contentProps={contentProps}
        renderFooter={renderFooter}
      />
    </View>
  );
};

export default Container;
