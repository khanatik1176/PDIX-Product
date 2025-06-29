import React, { FC } from 'react';
import Image from 'next/image';

type TechCardProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

const TechCard: FC<TechCardProps> = ({ src, alt, label, className }) => {
  return (
    <div
      className={`flex w-full max-w-[200px] items-center justify-center gap-2 rounded-lg bg-tertiary py-2 lg:py-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className='h-full max-h-4 w-full max-w-4 lg:max-h-6 lg:max-w-6'
      />
      <p className='text-[10px] font-semibold text-black lg:text-[20px]'>
        {label}
      </p>
    </div>
  );
};

export default TechCard;
