import React from 'react';
import { View } from 'react-native';
import { Container } from '~/components';
import {
  ColorType,
  Size,
  TopBarCenterContentType,
  TopBarLeftContentType,
  TopBarRightContentType,
} from '~/constants';
import { useDesignSystemContext } from '~/hooks';
import { HomeScreenProps } from '../../navigation/types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { toggleAppTheme } = useDesignSystemContext();
  const handleButtonPress = () => {
    toggleAppTheme();
  };

  const renderContent = () => <View></View>;

  return (
    <Container
      topBarProps={{
        leftContentProps: {
          onBackPress: navigation.goBack,
          type: TopBarLeftContentType.DEFAULT,
        },
        centerContentProps: {
          title: 'Title',
          subtitle: 'Subtitle',
          type: TopBarCenterContentType.TITLE_SUBTITLE,
        },
        rightContentProps: {
          leftIconProps: {
            name: 'Camera',
          },
          rightIconProps: {
            name: 'Camera',
          },
          onPressLeftIcon: () => {},
          onPressRightIcon: () => {},
          type: TopBarRightContentType.TWO_ICONS,
        },
      }}
      contentProps={{
        renderContent: renderContent(),
      }}
      bottomBarProps={{
        primaryButton: {
          title: 'Primary',
          onPress: handleButtonPress,
          colorType: ColorType.PRIMARY,
          size: Size.LARGE,
        },
        secondaryButton: {
          title: 'Secondary',
          onPress: () => {},
          colorType: ColorType.PRIMARY,
          size: Size.LARGE,
        },
      }}
    ></Container>
  );
};

export default HomeScreen;
