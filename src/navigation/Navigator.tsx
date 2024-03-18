import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeStack } from './stacks';

const Stack = createNativeStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  animationTypeForReplace: 'push',
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
