import React from 'react';
import { View } from 'react-native';
import { Container, InputDS, TextView } from '~/components';
import {
  ColorType,
  InputDSType,
  Size,
  TextType,
  TopBarLeftContentType,
} from '~/constants';
import { AddCategoryProps } from '~/navigation/types';
import styles from './styles';

const AddCategoryScreen = ({ navigation }: AddCategoryProps) => {
  const handleBackPress = () => navigation.goBack();

  const handleContinuePress = () => {};

  const renderContent = () => (
    <View>
      <TextView
        type={TextType.TEXT_SCREEN}
        description="Crea tu categoría"
        style={styles.title}
      />
      <InputDS
        title="Nombre"
        type={InputDSType.ALPHABETIC}
      />
    </View>
  );

  return (
    <Container
      topBarProps={{
        leftContentProps: {
          onBackPress: handleBackPress,
          type: TopBarLeftContentType.DEFAULT,
        },
      }}
      contentProps={{
        renderContent: renderContent(),
      }}
      bottomBarProps={{
        primaryButton: {
          title: 'Continuar',
          onPress: handleContinuePress,
          colorType: ColorType.PRIMARY,
          size: Size.LARGE,
        },
     
      }}
    />
  );
};

export default AddCategoryScreen;
