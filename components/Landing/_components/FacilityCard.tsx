import { FacilityCardProps } from '@/types/LandingTypes';
import Image from 'next/image';
import React, { FC } from 'react';

const FacilityCard: FC<FacilityCardProps> = ({ icon, title, description, DarkModeActive }) => {
  const textColor = DarkModeActive ? 'text-white' : 'text-black';
  return (
    <div className='flex items-center gap-2'>
      <Image src={icon} alt={title} />
      <div>
        <p className={`font-medium ${textColor} text-2xl md:text-lg lg:text-xl xl:text-2xl`}>{title}</p>
        <p className={`font-normal pt-2 ${textColor} text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px]`}>{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;