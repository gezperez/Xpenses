import React from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import { ButtonType, TopBarLeftContentType } from '~/constants';
import styles from './styles';
import { TopBarLeftContentProps } from './types';

export type TopBarLeftProps = {
  contentProps?: TopBarLeftContentProps;
};

const TopBarLeftContent = ({ contentProps }: TopBarLeftProps) => {
  const renderContent = () => {
    switch (contentProps?.type) {
      case TopBarLeftContentType.ICON:
        return (
          <Button
            iconProps={contentProps?.iconProps}
            type={ButtonType.ICON}
            onPress={contentProps.onPress}
            style={styles.icon}
          />
        );
      case TopBarLeftContentType.TWO_ICONS:
        return (
          <>
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
          </>
        );
      case TopBarLeftContentType.DEFAULT:
        return (
          <>
            <Button
              iconProps={{
                name: 'ArrowLeft',
              }}
              type={ButtonType.ICON}
              onPress={contentProps.onBackPress}
              style={styles.icon}
            />
          </>
        );
      default:
        return <View />;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default TopBarLeftContent;
