import { StyleSheet } from 'react-native';
import FontFamily from './FontFamily';

const TypographyVariant = StyleSheet.create({
  headlineH1: {
    fontFamily: FontFamily.EXTRA_BOLD,
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -1,
  },
  headlineH2: {
    fontFamily: FontFamily.EXTRA_BOLD,
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: -1,
  },
  headlineH3: {
    fontFamily: FontFamily.BOLD,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -1,
  },
  headlineH4: {
    fontFamily: FontFamily.BOLD,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -1,
  },
  headlineH5: {
    fontFamily: FontFamily.BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1,
  },
  bodyLargeBold: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  bodyLargeRegular: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  bodyDefaultBold: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  bodyDefaultRegular: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  bodySmallBold: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  bodySmallRegular: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  linkLarge: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  linkDefault: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  linkSmall: {
    fontFamily: FontFamily.SEMI_BOLD,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  captionDefault: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  captionSmall: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
});

export default TypographyVariant;
