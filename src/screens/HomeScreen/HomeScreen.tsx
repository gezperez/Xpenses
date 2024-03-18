import React from 'react';
import { View } from 'react-native';
import { Container } from '~/components';
import Button from '~/components/Button';
import { ColorType, Size } from '~/constants';
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
      contentProps={{
        renderContent: renderContent(),
      }}
      bottomBarProps={{
        primaryButton: {
          title: 'Primary',
          onPress: () => {},
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
