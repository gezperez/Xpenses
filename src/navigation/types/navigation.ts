import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddCategory: undefined;
};

export type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export type AddCategoryProps = {
  route: RouteProp<RootStackParamList, 'AddCategory'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddCategory'>;
};
