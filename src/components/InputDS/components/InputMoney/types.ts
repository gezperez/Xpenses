import { InputDSType } from '../../../../constants';
import { InputTextProps } from '../InputText/types';

export type InputMoneyProps = {
  type: InputDSType.MONEY;
  prefix?: string;
  suffix?: string;
  initialAmount?: string;
  amount?: string;
  onChangeAmount?: (amount: string, maskAmount: string) => void;
} & Omit<InputTextProps, 'type' | 'value' | 'onChangeText'>;
