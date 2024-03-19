import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDesignSystemContext } from '~/hooks';
import TextDS from '../TextDS';
import { TopBarBottomContentProps } from './components/TopBarBottomContent/types';
import { TopBarCenterContentProps } from './components/TopBarCenterContent/types';
import { TopBarLeftContentProps } from './components/TopBarLeftContent/types';
import { TopBarRightContentProps } from './components/TopBarRightContent/types';
import {
  TopBarBottomContent,
  TopBarCenterContent,
  TopBarLeftContent,
  TopBarRightContent,
} from './components';
import styles from './styles';

export type TopBarProps = {
  leftContentProps?: TopBarLeftContentProps;
  centerContentProps?: TopBarCenterContentProps;
  rightContentProps?: TopBarRightContentProps;
  bottomContentProps?: TopBarBottomContentProps;
  style?: StyleProp<ViewStyle>;
};

const TopBar = ({
  leftContentProps,
  centerContentProps,
  rightContentProps,
  bottomContentProps,
  style,
}: TopBarProps) => {
  const { theme } = useDesignSystemContext();

  const safeAreaInsets = useSafeAreaInsets();

  const renderContent = () => {
    return (
      <>
        <View style={styles.topContainer}>
          <TopBarLeftContent contentProps={leftContentProps} />
          <TopBarCenterContent contentProps={centerContentProps} />
          <TopBarRightContent contentProps={rightContentProps} />
        </View>
        <TopBarBottomContent contentProps={bottomContentProps} />
      </>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingTop: safeAreaInsets.top,
        },
        style,
      ]}
    >
      {renderContent()}
    </View>
  );
};

export default TopBar;
