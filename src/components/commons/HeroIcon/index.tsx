import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';

interface Props {
  icon: string;
  color?: string;
  size?: number;
  outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, color, size, outline = false } = props;

  const { ...icons } = outline ? OutlineIcons : SolidIcons;

  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = [`${color ? color : 'text-slate-600'}`, size ? size : 'h-5', size ? size : 'w-5'];

  return (
    // @ts-ignore
    <Icon className={classes.join(' ')} />
  );
};
