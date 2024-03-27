import { StyleProp, ViewStyle } from 'react-native';
import { TextType } from '~/constants';

export type TextSectionProps = {
  type: TextType.TEXT_SECTION;
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  descriptionAlignCenter?: boolean;
};

export type TextScreenProps = {
  type: TextType.TEXT_SCREEN;
  title?: string;
  titleAlignCenter?: boolean;
  description?: string;
  descriptionAlignCenter?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type TextViewProps = TextSectionProps | TextScreenProps;
