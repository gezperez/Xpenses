import { InputDSType } from '../../../../constants';
import { InputTextProps } from '../InputText/types';

export interface CheckerConfig {
  title: string;
  validate: (password: string) => boolean;
}

export type InputPasswordProps = {
  type: InputDSType.PASSWORD;
  checkerConfig?: CheckerConfig[];
  onIsValidPasswordChange?: (isValid: boolean) => void;
} & Omit<InputTextProps, 'type'>;
