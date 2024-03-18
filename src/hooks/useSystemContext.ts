import { useContext } from 'react';
import { SystemProviderContext } from '~/context/SystemProvider';

const useSystemContext = () => useContext(SystemProviderContext);

export default useSystemContext;
