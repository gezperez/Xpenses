import React from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import { ButtonType, TopBarRightContentType } from '~/constants';
import styles from './styles';
import { TopBarRightContentProps } from './types';

export type TopBarRightProps = {
  contentProps?: TopBarRightContentProps;
};

const TopBarRightContent = ({ contentProps }: TopBarRightProps) => {
  const renderContent = () => {
    switch (contentProps?.type) {
      case TopBarRightContentType.ICON:
        return (
          <Button
            iconProps={contentProps.iconProps}
            type={ButtonType.ICON}
            onPress={contentProps.onPress}
            style={styles.icon}
          />
        );
      case TopBarRightContentType.TWO_ICONS:
        return (
          <View style={styles.container}>
            <Button
              iconProps={contentProps.leftIconProps}
              type={ButtonType.ICON}
              onPress={contentProps.onPressLeftIcon}
              style={styles.icon}
            />
            <Button
              iconProps={contentProps.rightIconProps}
              type={ButtonType.ICON}
              onPress={contentProps.onPressRightIcon}
              style={styles.icon}
            />
          </View>
        );
      default:
        return <View />;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default TopBarRightContent;
