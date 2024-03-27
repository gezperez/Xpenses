import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import { InputDSType } from '../../../../constants';
import InputDS from '../../InputDS';
import { InputMoneyProps } from './types';

/**
 * Input Money Component
 *
 * Recommended props
 * @param {number} maxLength (optional) Determines the number of digits in the whole part of the amount
 * @param {string} initialAmount (optional) An initial amount (without mask). E.g. '0.4'
 * @param {string} amount (optional) dynamic amount (without mask) to replace current internal amount. E.g. '0.4'
 * @param {function} onChangeAmount (optional) Called in a change in the amount. Returns the new amount without a mask
 *
 * Masked amounts examples
 * '$1'
 * '$1 Daily'
 * '$1,234,567.80'
 * '$1,234,567.80 Daily'
 *
 * Unmasked amounts examples
 * '1'
 * '1234567.80'
 */

const InputMoney = (props: InputMoneyProps, ref?: ForwardedRef<TextInput>) => {
  const {
    initialAmount,
    amount,
    prefix = '$',
    suffix,
    maxLength,
    onChangeAmount,
    onFocus,
    onBlur,
  } = props;

  const placeholder = props.placeholder ?? prefix;

  const inputMaxLengthFocus =
    `${prefix}.00`.length + (maxLength ? maxLength + maxLength / 3 : 0);
  const inputMaxLengthBlur =
    inputMaxLengthFocus + `${suffix ? ` ${suffix}` : ''}`.length;

  const innerRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  const [unmaskedAmount, setUnmaskedAmount] = useState('');
  const [maskedAmount, setMaskedAmount] = useState('');
  const [inputMaxLength, setInputMaxLength] = useState(inputMaxLengthBlur);

  const parseUnmaskedAmount = (
    unmaskedNewAmount: string,
  ): string | undefined => {
    // Sanitize the string by removing unwanted characters (in case of pasting from the clipboard)
    const [integerPart, decimalPart] = unmaskedNewAmount
      .replace(/[^\d.]/g, '')
      .split(/\.(.*)/);
    const sanitizedUnmaskedNewAmount = `${integerPart?.slice(0, maxLength)}${
      unmaskedNewAmount.endsWith('.') || !!decimalPart ? '.' : ''
    }${decimalPart?.replace(/\./g, '').slice(0, 2) ?? ''}`;

    const lastCharacter = sanitizedUnmaskedNewAmount.slice(-1);

    const hasADot = (value: string) => /[.]/.test(value);
    const isANumber = (value: string) => /^[0-9]+$/.test(value);

    // Delete last digit
    if (sanitizedUnmaskedNewAmount.length === 0) {
      return sanitizedUnmaskedNewAmount;
    }

    // Dot rules: delete or insert a dot if there is not one already
    if (lastCharacter === '.') {
      // Delete dot
      if (sanitizedUnmaskedNewAmount.length < unmaskedAmount.length) {
        return sanitizedUnmaskedNewAmount;
      }

      // Already have a dot
      if (hasADot(unmaskedAmount)) {
        return undefined;
      }

      // If empty number, insert zero before dot
      return `${unmaskedAmount === '' ? '0' : unmaskedAmount}.`;
    }

    // Numbers rules: insert or delete numbers
    if (isANumber(lastCharacter)) {
      // Delete number
      if (unmaskedAmount.length > sanitizedUnmaskedNewAmount.length) {
        return sanitizedUnmaskedNewAmount;
      }

      // Do not insert more zeros
      if (
        (unmaskedAmount === '0' || unmaskedAmount === '0.00') &&
        lastCharacter === '0'
      ) {
        return undefined;
      }

      // Replace zero with new number
      if (unmaskedAmount === '0' && lastCharacter !== '0') {
        return lastCharacter;
      }

      if (hasADot(unmaskedAmount)) {
        const splitAmount = unmaskedAmount.split('.');
        if (splitAmount[1].length < 2) {
          return sanitizedUnmaskedNewAmount;
        }

        return undefined;
      }

      // Integer part: insert only if the number does not exceed the allowed length
      if (maxLength && unmaskedAmount.length < maxLength) {
        return sanitizedUnmaskedNewAmount;
      }
    }

    return undefined;
  };

  const addSuffix = (maskedNewAmount: string) =>
    `${maskedNewAmount}${suffix ? ` ${suffix}` : ''}`;

  const addCommas = (parsedUnmaskedNewAmount: string) => {
    const [integerPart, decimalPart] = parsedUnmaskedNewAmount.split('.');

    let parsedIntegerPart = '';
    for (let i = 1; i <= integerPart.length; i++) {
      parsedIntegerPart = `${
        i % 3 === 0 && i !== integerPart.length ? ',' : ''
      }${integerPart[integerPart.length - i]}${parsedIntegerPart}`;
    }

    return parsedIntegerPart.concat(
      decimalPart !== undefined ? `.${decimalPart}` : '',
    );
  };

  const handleDecimalPart = (
    newMaskedAmount = maskedAmount,
    newUnmaskedAmount = unmaskedAmount,
  ) => {
    // Delete dot when decimal part is undefined
    if (newMaskedAmount.endsWith('.') || newUnmaskedAmount.endsWith('.')) {
      return {
        newMaskedAmount: newMaskedAmount.slice(0, -1),
        newUnmaskedAmount: newUnmaskedAmount.slice(0, -1),
      };
    }

    // Complete decimal part with zero when decimal part has one character
    if (
      newMaskedAmount.slice(-2, -1) === '.' ||
      newUnmaskedAmount.slice(-2, -1) === '.'
    ) {
      return {
        newMaskedAmount: `${newMaskedAmount}0`,
        newUnmaskedAmount: `${newUnmaskedAmount}0`,
      };
    }

    return { newMaskedAmount, newUnmaskedAmount };
  };

  const sendAmount = (unmaskedNewAmount: string, maskedNewAmount: string) => {
    if (onChangeAmount) {
      onChangeAmount(unmaskedNewAmount, maskedNewAmount);
    }
  };

  const onChangeTextInput = (text: string) => {
    // Delete all commas except the one added by the user (in that Android case, replace for a dot)
    const unmaskedNewAmount = text.endsWith(',')
      ? `${text.replace(prefix, '').replace(/,/gi, '')}.`
      : text.replace(prefix, '').replace(/,/gi, '');

    const parsedUnmaskedNewAmount = parseUnmaskedAmount(unmaskedNewAmount);
    if (parsedUnmaskedNewAmount !== undefined) {
      setUnmaskedAmount(parsedUnmaskedNewAmount);
      const maskedNewAmount = `${prefix}${addCommas(parsedUnmaskedNewAmount)}`;
      setMaskedAmount(maskedNewAmount);
      sendAmount(parsedUnmaskedNewAmount, maskedNewAmount);
    }
  };

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onFocus) {
      onFocus(e);
    }

    setInputMaxLength(inputMaxLengthFocus);

    if (unmaskedAmount.length > 0) {
      // Delete suffix
      setMaskedAmount(maskedAmount.replace(suffix ? ` ${suffix}` : '', ''));

      return;
    }

    if (unmaskedAmount.length === 0) {
      setMaskedAmount(prefix);
    }
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }

    setInputMaxLength(inputMaxLengthBlur);

    if (unmaskedAmount.length > 0) {
      const { newMaskedAmount, newUnmaskedAmount } = handleDecimalPart();
      if (newUnmaskedAmount !== unmaskedAmount) {
        setUnmaskedAmount(newUnmaskedAmount);
        sendAmount(newUnmaskedAmount, newMaskedAmount);
      }

      setMaskedAmount(addSuffix(newMaskedAmount));

      return;
    }

    if (unmaskedAmount.length === 0) {
      setMaskedAmount('');
    }
  };

  useEffect(() => {
    if (typeof initialAmount === 'string') {
      const maskedNewAmount = `${prefix}${addCommas(initialAmount)}`;
      const { newMaskedAmount, newUnmaskedAmount } = handleDecimalPart(
        maskedNewAmount,
        initialAmount,
      );
      setMaskedAmount(
        innerRef.current?.isFocused()
          ? newMaskedAmount
          : addSuffix(newMaskedAmount),
      );
      setUnmaskedAmount(newUnmaskedAmount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialAmount]);

  useEffect(() => {
    if (typeof amount === 'string') {
      const maskedNewAmount = `${prefix}${addCommas(amount)}`;
      if (innerRef.current?.isFocused()) {
        setUnmaskedAmount(amount);
        setMaskedAmount(maskedNewAmount);

        return;
      }

      const { newMaskedAmount, newUnmaskedAmount } = handleDecimalPart(
        maskedNewAmount,
        amount,
      );
      setUnmaskedAmount(newUnmaskedAmount);
      setMaskedAmount(addSuffix(newMaskedAmount));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return (
    <InputDS
      {...props}
      ref={innerRef}
      type={InputDSType.TEXT}
      testID="INPUT-MONEY"
      keyboardType="decimal-pad"
      returnKeyType="done"
      placeholder={placeholder}
      value={maskedAmount}
      onChangeText={onChangeTextInput}
      maxLength={inputMaxLength}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
};

export default forwardRef(InputMoney);
