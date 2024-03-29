import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddCategoryScreen, HomeScreen } from '~/screens';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
