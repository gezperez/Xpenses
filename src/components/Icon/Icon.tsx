import { icons } from 'lucide-react-native';
import { IconSize } from '~/constants';

export type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: IconSize;
};

const Icon = ({ name, color, size }: IconProps) => {
  if (!name) {
    return null;
  }

  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
    />
  );
};

export default Icon;
