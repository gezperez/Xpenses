import React from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import { useSystemContext } from '~/hooks';
import { HomeScreenProps } from '../../navigation/types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { toggleAppTheme } = useSystemContext();
  const handleButtonPress = () => {
    toggleAppTheme();
  };

  return (
    <View>
      <Button
        title="Button"
        onPress={handleButtonPress}
      />
    </View>
  );
};

export default HomeScreen;
