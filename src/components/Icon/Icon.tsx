import { StyleProp, ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';
import { IconSize } from '~/constants';

export type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: IconSize;
  style?: StyleProp<ViewStyle>;
};

const Icon = ({ name, color, size, style }: IconProps) => {
  if (!name) {
    return null;
  }

  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      style={style}
    />
  );
};

export default Icon;
