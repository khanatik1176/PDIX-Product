import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HomeCardProps } from '@/types/HomeTypes';


const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  actionText,
  image,
  imageAlt,
  backgroundColor = '#FEFAEC'
}) => {
  return (
    <div 
      className='min-h-[148px] w-full lg:max-w-[470px] 2xl:max-w-[550px] px-8 py-4 flex items-center justify-between rounded-2xl shadow-md'
      style={{ backgroundColor }}
    >
      <div className='flex flex-col'>
        <p className='text-xl font-semibold text-black'>
          {title}
        </p>
        <p className='py-2 text-twelve font-normal text-black'>
          {description}
        </p>
        <div className='flex items-center gap-2 cursor-pointer'>
          <p className='text-sm font-medium text-primary'>{actionText}</p>
          <span>
            <ArrowRight size={16} className='text-primary' />
          </span>
        </div>
      </div>
      <div className='flex-shrink-0 ml-4'>
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default HomeCard;
