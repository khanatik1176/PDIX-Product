'use client';
import React, { FC } from 'react';

type CustomCardProps = {
  title: string;
  content: string;
  className?: string; // Optional className prop
  DarkModeActive?: boolean; // Optional DarkModeActive prop
};

const CustomCard: FC<CustomCardProps> = ({
  title,
  content,
  className,
  DarkModeActive,
}) => {
  return (
    <div
      className={`${DarkModeActive ? 'mt-8 rounded-xl bg-[#3D3D3D69] p-8' : 'mt-8 rounded-xl bg-cardBG p-8'} ${className}`}
    >
      <h1 className='pb-3 text-2xl font-bold'>{title}</h1>
      <p
        className={`${DarkModeActive ? 'text-textLight text-base font-normal' : 'text-base font-normal text-textSecondary'}`}
      >
        {content}
      </p>
    </div>
  );
};

export default CustomCard;
