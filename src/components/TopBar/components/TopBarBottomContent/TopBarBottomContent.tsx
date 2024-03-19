import React from 'react';
import { View } from 'react-native';
import Tab from '~/components/Tab';
import { TopBarBottomContentType } from '~/constants';
import styles from './styles';
import { TopBarBottomContentProps } from './types';

export type TopBarBottomProps = {
  contentProps?: TopBarBottomContentProps;
};

const TopBarBottomContent = ({ contentProps }: TopBarBottomProps) => {
  if (!contentProps) {
    return null;
  }

  const renderContent = () => {
    switch (contentProps?.type) {
      case TopBarBottomContentType.TABS:
        return (
          <View style={styles.tabContainer}>
            <Tab
              options={contentProps.options}
              selectedOption={contentProps.selectedOption}
              onOptionChange={contentProps.onOptionChange}
              isDisabled={contentProps.isDisabled}
            />
          </View>
        );
      /*   case TopBarBottomContentType.SEARCH:
        return (
          <InputDS
            {...contentProps}
            type={InputDSType.SEARCH}
            containerStyle={styles.search}
          />
        ); */
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default TopBarBottomContent;
