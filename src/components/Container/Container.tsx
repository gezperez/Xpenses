import React from 'react';
import { RefreshControlProps, StatusBar, View } from 'react-native';
import { useDesignSystemContext } from '~/hooks';
import BottomBar from '../BottomBar';
import { BottomBarProps } from '../BottomBar/BottomBar';
import TopBar, { TopBarProps } from '../TopBar/TopBar';
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
  topBarProps?: TopBarProps;
  contentProps: ContainerContentProps;
  bottomBarProps?: BottomBarProps;
};

const Container = ({
  topBarProps,
  contentProps,
  bottomBarProps,
}: ContainerProps) => {
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
      <TopBar {...topBarProps} />
      <ContainerDSScrollView
        contentProps={contentProps}
        renderFooter={renderFooter}
      />
    </View>
  );
};

export default Container;
