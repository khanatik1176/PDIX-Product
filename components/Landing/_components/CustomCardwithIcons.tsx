import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type CustomCardWithIconsProps = {
  icon: StaticImageData;
  value: string;
  description: string;
  DarkModeActive?: boolean;
};

const CustomCardWithIcons: FC<CustomCardWithIconsProps> = ({
  icon,
  value,
  description,
  DarkModeActive,
}) => {
  return (
    <div
      className={`${DarkModeActive ? 'h-[120px] w-[156px] rounded-xl bg-[#3D3D3D69] lg:h-[140px] lg:w-[200px]' : 'h-[120px] w-[156px] rounded-xl bg-cardBG lg:h-[140px] lg:w-[200px]'}`}
    >
      <div className='flex items-center justify-center gap-4 px-8 pt-8'>
        <span>
          <Image src={icon} alt='Icon' width={24} height={24} />
        </span>
        <p
          className={`${DarkModeActive ? 'text-base font-bold text-[#F6F6F6] lg:text-2xl' : 'text-base font-bold text-black lg:text-2xl'}`}
        >
          {value}
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <p
          className={`${DarkModeActive ? 'text-textLight pt-4 text-xs font-normal lg:text-sm' : 'pt-4 text-xs font-normal text-textSecondary lg:text-sm'}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CustomCardWithIcons;
