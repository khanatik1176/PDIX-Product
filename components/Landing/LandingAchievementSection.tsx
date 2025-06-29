'use client';
import React, { FC } from 'react';
import Timer from '@/public/Images/Time.svg';
import Target from '@/public/Images/Target.svg';
import Networking from '@/public/Images/Networking.svg';
import CustomCardWithIcons from './_components/CustomCardwithIcons';
import { LandingGeneralProps } from '@/types/LandingTypes';
import DarkTimer from '@/public/Images/DarkTime.svg';
import DarkTarget from '@/public/Images/DarkTarget.svg';
import DarkNetworking from '@/public/Images/DarkNetworking.svg';

const LandingAchievementSection: FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='flex flex-col lg:flex-row lg:gap-16 2xl:gap-20'>
        <div className='lg:pt-20'>
          <h1 className='w-full max-w-[100px] text-3xl font-semibold lg:max-w-[600px] 2xl:max-w-[750px] lg:text-5xl'>
            <span className='text-primary'>Achievement</span> Highlights
          </h1>
          <p
            className={`leading-normal ${DarkModeActive ? 'text-textLight w-full max-w-[400px] pt-6 text-justify text-xl font-normal lg:max-w-[600px] lg:text-[20px]' : 'w-full max-w-[400px] pt-6 text-justify text-xl font-normal text-textSecondary lg:max-w-[600px] lg:text-[20px]'}`}
          >
            Driven by creativity, precision, and passion — our journey reflects
            the impact we&apos;ve made through design and innovation.
            Here&apos;s a glimpse into the milestones that shape who we are.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex w-full flex-col items-center justify-center pt-4'>
            <CustomCardWithIcons
              icon={DarkModeActive ? DarkTimer : Timer}
              value='10 +'
              description='Years of Experience'
              DarkModeActive={DarkModeActive}
            />
          </div>
          <div className='flex gap-8 px-2 py-8 lg:mx-auto'>
            <span className='w-full'>
              <CustomCardWithIcons
                icon={DarkModeActive ? DarkTarget : Target}
                value='200 +'
                description='Successful Projects'
                DarkModeActive={DarkModeActive}
              />
            </span>
            <span className='mt-4 w-full'>
              <CustomCardWithIcons
                icon={DarkModeActive ? DarkNetworking : Networking}
                value='50 +'
                description='Expert Team Members'
                DarkModeActive={DarkModeActive}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAchievementSection;
