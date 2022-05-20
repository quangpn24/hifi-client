import React from 'react';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {
  iconName: string;
  content?: string;
  outline?: boolean;
};

const DescriptionItem = (props: Props) => {
  return (
    <div className='flex flex-row items-center'>
      <HeroIcon
        icon={props.iconName}
        outline={props.outline ? props.outline : false}
        size='h-[20px]'
        className='mr-[10px]'
      />
      {props.content}
    </div>
  );
};

export default DescriptionItem;
