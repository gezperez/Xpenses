import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Container, TextView } from '~/components';
import { ButtonType, ColorType, IconSize, Size, TextType } from '~/constants';
import { mockCategories } from '~/data';
import { Category } from '~/types';
import { HomeScreenProps } from '../../navigation/types';
import styles from './styles';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const handleContinuePress = () => {};

  const handleAddCategoryPress = () => {
    navigation.navigate('AddCategory');
  };

  const handleCategoryPress = (item: Category) => {
    const categoryIndex = categories.findIndex((cat) => cat.name === item.name);
    if (categoryIndex !== -1) {
      const updatedCategories = [...categories];
      updatedCategories.splice(categoryIndex, 1);

      return setCategories(updatedCategories);
    }

    return setCategories((prevCategories) => [...prevCategories, item]);
  };

  const renderItem = ({ item }: { item: Category }) => {
    const categoryIndex = categories.findIndex((cat) => cat.name === item.name);
    const isSelected = categoryIndex !== -1 ? true : false;

    return (
      <Button
        iconProps={{
          name: item.iconName,
          size: IconSize.SCREEN,
        }}
        onPress={() => handleCategoryPress(item)}
        type={ButtonType.ICON}
        title={item.name}
        style={{
          margin: 16,
        }}
        isSelected={isSelected}
        withBorder
      />
    );
  };

  const renderContent = () => (
    <View style={styles.container}>
      <TextView
        type={TextType.TEXT_SCREEN}
        title="Hola Ezequiel!"
        description="Elige al menos 2 de las siguientes categorías"
      />
      <FlatList
        renderItem={renderItem}
        data={mockCategories}
        numColumns={3}
        contentContainerStyle={styles.containerStyle}
      />
    </View>
  );

  const isContinueDisabled = categories.length < 2;

  return (
    <Container
      contentProps={{
        renderContent: renderContent(),
      }}
      bottomBarProps={{
        primaryButton: {
          title: 'Continuar',
          onPress: handleContinuePress,
          colorType: ColorType.PRIMARY,
          size: Size.LARGE,
          isDisabled: isContinueDisabled,
        },
        floatingButton: {
          iconProps: {
            name: 'Plus',
          },
          onPress: handleAddCategoryPress,
        },
      }}
    />
  );
};

export default HomeScreen;
