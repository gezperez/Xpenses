import React from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import { ColorType, Size } from '~/enums';
import { useDesignSystemContext } from '~/hooks';
import { HomeScreenProps } from '../../navigation/types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { toggleAppTheme } = useDesignSystemContext();
  const handleButtonPress = () => {
    toggleAppTheme();
  };

  return (
    <View>
      <Button
        title="Button"
        onPress={handleButtonPress}
        colorType={ColorType.SECONDARY}
        size={Size.LARGE}
      />
    </View>
  );
};

export default HomeScreen;
