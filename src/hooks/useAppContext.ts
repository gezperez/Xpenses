import { useContext } from 'react';
import { AppContext } from '~/context/AppProvider';

const useAppContext = () => useContext(AppContext);

export default useAppContext;
