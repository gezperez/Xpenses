import { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboard = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  const handleShowEvents = () => setKeyboardShown(true);

  const handleHideEvents = () => setKeyboardShown(false);

  const handleAndroidEvents = useCallback(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleShowEvents,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleHideEvents,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleiOSEvents = useCallback(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      handleShowEvents,
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      handleHideEvents,
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      return handleAndroidEvents();
    }

    return handleiOSEvents();
  }, [handleAndroidEvents, handleiOSEvents]);

  return keyboardShown;
};

export default useKeyboard;
