// Phone Number Mask = +1 (XXX) XXX - XXXX

const usePhoneNumberUtils = () => {
  const MASKED_PHONE_NUMBER_LENGTH = 19;
  const UNMASKED_PHONE_NUMBER_LENGTH = 10;

  const maskPhoneNumber = (unmaskedPhoneNumber: string, prefix = '+1') => {
    const areaCode = unmaskedPhoneNumber.slice(0, 3);
    const firstPartPhoneNumber = unmaskedPhoneNumber.slice(3, 6);
    const lastPartPhoneNumber = unmaskedPhoneNumber.slice(6, 10);

    return `${prefix} (${areaCode}) ${firstPartPhoneNumber} - ${lastPartPhoneNumber}`;
  };

  const unmaskPhoneNumber = (maskedPhoneNumber: string, prefix = '+1') => {
    return maskedPhoneNumber
      .replace(`${prefix} `, '')
      .replace(/(\s|\(|\)|-)/g, '');
  };

  return {
    MASKED_PHONE_NUMBER_LENGTH,
    UNMASKED_PHONE_NUMBER_LENGTH,
    maskPhoneNumber,
    unmaskPhoneNumber,
  };
};

export default usePhoneNumberUtils;
