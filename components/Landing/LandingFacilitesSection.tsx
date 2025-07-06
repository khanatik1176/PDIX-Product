'use client';
import React, { FC } from 'react';
import LightTrophy from '@/public/Images/LightTrophy.svg';
import DarkTrophy from '@/public/Images/DarkTrophy.svg';
import Image from 'next/image';
import { LandingGeneralProps } from '@/types/LandingTypes';
import Computer from '@/public/Images/Computer.svg';
import Books from '@/public/Images/Course Materials.svg';
import Curriculum from '@/public/Images/Curriculum.svg';
import FacilityCard from './_components/FacilityCard';

const LandingFacilitesSection: FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  const trophyIcon = DarkModeActive ? DarkTrophy : LightTrophy;
  const textColor = DarkModeActive ? 'text-white' : 'text-black';

  return (
    <div className='relative px-4 py-16 sm:pb-0 md:px-4 md:py-28 lg:px-16 xl:px-[120px] 2xl:px-64'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='relative flex w-full items-center justify-center'>
          {/* Trophy icon on the left for xl and up, above for mobile */}
          <span className='absolute top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:left-40 xl:block 2xl:left-28'>
            <Image
              src={trophyIcon}
              alt='Trophy'
              className='h-16 w-16 xl:h-[122px] xl:w-[105px]'
            />
          </span>
          <span className='absolute bottom-[136px] left-1 mb-4 block sm:bottom-0 md:left-2 lg:left-2 xl:hidden'>
            <Image
              src={trophyIcon}
              alt='Trophy'
              className='mx-auto h-16 w-16 md:h-[100px] md:w-[100px]'
            />
          </span>
          <p className={`w-full text-[42px] font-semibold tracking-wide md:text-[30px] lg:text-[38px] xl:text-[42px] max-w-[350px] md:max-w-[800px] ${textColor}`}>
            Designed for <span className='text-primary'>Efficient</span>{' '}
            Learning
          </p>
        </div>
        <p className={`w-full pb-12 pt-6 text-[20px] font-normal tracking-tighter md:text-[14px] max-w-[350px] lg:max-w-[880px] lg:pl-0 lg:text-[18px] xl:pl-0 xl:text-[20px] ${textColor}`}>
          Built for every kind of learner—whether you&apos;re studying,
          teaching, or leading projects.
        </p>
      </div>
      <div className='flex flex-col gap-6 md:gap-0 md:flex-row md:items-center md:justify-between'>
        <FacilityCard
          icon={Computer}
          title='Community Workspace'
          description='Collaborate and learn together'
          DarkModeActive={DarkModeActive}
        />
        <FacilityCard
          icon={Books}
          title='Share Study Materials'
          description='Easily exchange notes and resources'
          DarkModeActive={DarkModeActive}
        />
        <FacilityCard
          icon={Curriculum}
          title='Organized Categories'
          description='Keep everything in its place'
          DarkModeActive={DarkModeActive}
        />
      </div>
    </div>
  );
};

export default LandingFacilitesSection;