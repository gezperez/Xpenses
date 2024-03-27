import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { InputDSType } from '../../../../constants';
import { usePhoneNumberUtils } from '../../../../hooks';
import InputDS from '../../InputDS';
import { InputPhoneNumberProps } from './types';

/**
 * Input Phone Number Component
 *
 * Recommended props
 * @param {string} phoneNumber (optional) Phone number without mask
 * @param {function} onCompletePhoneNumber (optional) Called when user finish enter phone number. Returns the new phone number without a mask
 *
 * Masked phone number example
 * '+1 (123) 456 - 7890'
 *
 * Unmasked phone number example
 * '1234567890'
 */
const InputPhoneNumber = (
  props: InputPhoneNumberProps,
  ref?: ForwardedRef<TextInput>,
) => {
  const {
    phoneNumber,
    onCompletePhoneNumber,
    onChangeText,
    prefix = '+1',
  } = props;
  const placeholder = props.placeholder ?? prefix;

  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState(`${prefix} `);

  const {
    MASKED_PHONE_NUMBER_LENGTH,
    UNMASKED_PHONE_NUMBER_LENGTH,
    maskPhoneNumber,
    unmaskPhoneNumber,
  } = usePhoneNumberUtils();

  const handleSetMaskedPhoneNumber = (text: string) => {
    // add character
    if (maskedPhoneNumber?.length < text.length) {
      const lastCharacter = text.charAt(text.length - 1);
      if (/[0-9]/.test(lastCharacter)) {
        if (text.length === 1) {
          setMaskedPhoneNumber(`${prefix} ${lastCharacter}`);

          return;
        }

        if (text.length === 6) {
          const areaCode = text.split(' ')[1];
          setMaskedPhoneNumber(`${prefix} (${areaCode}) `);

          return;
        }

        if (text.length === 12) {
          setMaskedPhoneNumber(`${text} - `);

          return;
        }

        setMaskedPhoneNumber(text);
      }

      return;
    }

    // remove character
    if (text.length === 14) {
      setMaskedPhoneNumber(text.slice(0, -3));

      return;
    }

    if (text.length === 8) {
      const areaCode = text.slice(4, 6);
      setMaskedPhoneNumber(`${prefix} ${areaCode}`);

      return;
    }

    if (text.length < 3) {
      return;
    }

    setMaskedPhoneNumber(text);
  };

  const handleOnChangePhone = (text: string) => {
    handleSetMaskedPhoneNumber(text);

    const unmaskedPhoneNumber = unmaskPhoneNumber(text);
    // Delete possible dots and commas from the number-pad keyboard of Android
    const sanitizedUnmaskedPhoneNumber = unmaskedPhoneNumber.replace(
      /(\.|,)/g,
      '',
    );

    if (onChangeText) {
      onChangeText(sanitizedUnmaskedPhoneNumber);
    }

    if (
      onCompletePhoneNumber &&
      sanitizedUnmaskedPhoneNumber.length === UNMASKED_PHONE_NUMBER_LENGTH
    ) {
      onCompletePhoneNumber(sanitizedUnmaskedPhoneNumber);
    }
  };

  useEffect(() => {
    if (
      typeof phoneNumber === 'string' &&
      phoneNumber.length === UNMASKED_PHONE_NUMBER_LENGTH
    ) {
      setMaskedPhoneNumber(maskPhoneNumber(phoneNumber, prefix));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  return (
    <InputDS
      {...props}
      type={InputDSType.TEXT}
      keyboardType="number-pad"
      placeholder={placeholder}
      value={maskedPhoneNumber}
      onChangeText={handleOnChangePhone}
      maxLength={MASKED_PHONE_NUMBER_LENGTH}
      ref={ref}
    />
  );
};

export default forwardRef(InputPhoneNumber);
