import React from 'react';
import {
  Platform,
  RefreshControl as RNRefreshControl,
  RefreshControlProps as RNRefreshControlProps,
  RefreshControlPropsAndroid,
} from 'react-native';
import { useDesignSystemContext } from '../../hooks';

export type RefreshControlDSProps = RNRefreshControlProps &
  RefreshControlPropsAndroid;

const RefreshControlDS = (props: RefreshControlDSProps) => {
  const { refreshing, onRefresh } = props;
  const { theme } = useDesignSystemContext();

  if (Platform.OS === 'android') {
    return <RNRefreshControl {...props} />;
  }

  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={theme.onSurface}
    />
  );
};

export default RefreshControlDS;
