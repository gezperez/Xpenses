import React from 'react';
import { View } from 'react-native';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { Typography } from '../../../../constants';
import { TextScreenProps } from '../../types';
import styles from './styles';

const TextScreen = ({
  title,
  description,
  descriptionAlignCenter,
  titleAlignCenter,
  style,
}: TextScreenProps) => {
  const { theme } = useDesignSystemContext();

  return (
    <View style={[styles.container, style]}>
      {title && (
        <TextDS
          type={Typography.HEADLINE_H2}
          style={styles.title}
          alignCenter={titleAlignCenter}
          color={theme.onBackground}
        >
          {title}
        </TextDS>
      )}
      {description && (
        <TextDS
          type={Typography.BODY_EXTRA_LARGE_REGULAR}
          alignCenter={descriptionAlignCenter}
          color={theme.onBackground}
        >
          {description}
        </TextDS>
      )}
    </View>
  );
};

export default TextScreen;
