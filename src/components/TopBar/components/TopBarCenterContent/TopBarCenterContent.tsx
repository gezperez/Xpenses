import React from 'react';
import { View } from 'react-native';
import TextDS from '~/components/TextDS';
import { TopBarCenterContentType, Typography } from '~/constants';
import { useDesignSystemContext } from '~/hooks';
import styles from './styles';
import { TopBarCenterContentProps } from './types';

export type TopBarCenterProps = {
  contentProps?: TopBarCenterContentProps;
};

const TopBarCenterContent = ({ contentProps }: TopBarCenterProps) => {
  const { theme } = useDesignSystemContext();

  const renderContent = () => {
    switch (contentProps?.type) {
      case TopBarCenterContentType.TITLE:
        return (
          <TextDS
            type={Typography.BODY_LARGE_BOLD}
            color={theme.onBackground}
            numberOfLines={1}
          >
            {contentProps.title}
          </TextDS>
        );
      case TopBarCenterContentType.TITLE_SUBTITLE:
        return (
          <View style={styles.textContainer}>
            <TextDS
              type={Typography.BODY_LARGE_BOLD}
              color={theme.onBackground}
              numberOfLines={1}
            >
              {contentProps.title}
            </TextDS>
            <TextDS
              type={Typography.BODY_DEFAULT_REGULAR}
              color={theme.onBackground}
              numberOfLines={1}
            >
              {contentProps.subtitle}
            </TextDS>
          </View>
        );

      default:
        return <View />;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {renderContent()}
    </View>
  );
};

export default TopBarCenterContent;
