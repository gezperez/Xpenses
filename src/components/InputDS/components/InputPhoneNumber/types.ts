import { InputDSType } from '../../../../constants';
import { InputTextProps } from '../InputText/types';

export type InputPhoneNumberProps = {
  type: InputDSType.PHONE_NUMBER;
  prefix?: string;
  phoneNumber?: string;
  onCompletePhoneNumber?: (phoneNumber: string) => void;
} & Omit<InputTextProps, 'type' | 'value'>;
