import { TopBarCenterContentType } from '~/constants';

type TitleContentProps = {
  title: string;
  accessibilityLabel?: string;
  type: TopBarCenterContentType.TITLE;
};

type TitleWithSubtitleContentProps = {
  title: string;
  subtitle: string;
  accessibilityLabel?: string;
  type: TopBarCenterContentType.TITLE_SUBTITLE;
};

export type TopBarCenterContentProps =
  | TitleContentProps
  | TitleWithSubtitleContentProps;
