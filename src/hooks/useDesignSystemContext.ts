import { useContext } from 'react';
import { DesignSystemProviderContext } from '~/context/DesignSystemProvider';

const useDesignSystemContext = () => useContext(DesignSystemProviderContext);

export default useDesignSystemContext;
