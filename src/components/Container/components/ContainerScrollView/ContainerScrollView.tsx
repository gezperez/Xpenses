import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import RefreshControlDS, {
  RefreshControlDSProps,
} from '~/components/RefreshControlDS/RefreshControlDS';
import styles from './styles';

export type ContainerDSScrollViewContentProps = {
  renderContent: ReactNode;
  keyboardAware?: boolean;
  refreshControlOptions?: RefreshControlDSProps;
} & ScrollViewProps;

export type ContainerDSScrollViewProps = {
  contentProps: ContainerDSScrollViewContentProps;
  renderFooter: () => React.JSX.Element;
};

const ContainerDSScrollView = ({
  contentProps,
  renderFooter,
}: ContainerDSScrollViewProps) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    enabled={contentProps?.keyboardAware}
    style={styles.container}
  >
    <ScrollView
      contentContainerStyle={styles.scrollView}
      {...contentProps}
      showsVerticalScrollIndicator={false}
      bounces={contentProps?.refreshControlOptions !== undefined}
      refreshControl={
        contentProps?.refreshControlOptions && (
          <RefreshControlDS {...contentProps.refreshControlOptions} />
        )
      }
    >
      {contentProps?.renderContent}
    </ScrollView>
    {renderFooter()}
  </KeyboardAvoidingView>
);

export default ContainerDSScrollView;
