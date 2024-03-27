import React from 'react';
import { View } from 'react-native';
import TextDS from '~/components/TextDS';
import { useDesignSystemContext } from '~/hooks';
import { Typography } from '../../../../constants';
import { TextSectionProps } from '../../types';
import styles from './styles';

const TextSection = ({
  title,
  description,
  descriptionAlignCenter,
  style,
}: TextSectionProps) => {
  const { theme } = useDesignSystemContext();

  return (
    <View style={style}>
      <View style={styles.row}>
        {title && (
          <TextDS
            type={Typography.HEADLINE_H4}
            style={description ? styles.title : undefined}
            color={theme.onBackground}
          >
            {title}
          </TextDS>
        )}
      </View>
      {description && (
        <TextDS
          type={Typography.BODY_DEFAULT_REGULAR}
          alignCenter={descriptionAlignCenter}
          color={theme.onBackground}
        >
          {description}
        </TextDS>
      )}
    </View>
  );
};

export default TextSection;
