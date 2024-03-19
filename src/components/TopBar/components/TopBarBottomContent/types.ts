import { TextInputProps } from 'react-native';
import { TabOption } from '~/components/Tab/Tab';
import { TopBarBottomContentType } from '~/constants';

type TabContentProps = {
  selectedOption: TabOption;
  options: TabOption[];
  onOptionChange: (option: TabOption) => void;
  isDisabled?: boolean;
  isSkeleton?: boolean;
  accessibilityLabel?: string;
  type: TopBarBottomContentType.TABS;
};

interface SearchContentProps extends TextInputProps {
  type: TopBarBottomContentType.SEARCH;
}

export type TopBarBottomContentProps = TabContentProps | SearchContentProps;
