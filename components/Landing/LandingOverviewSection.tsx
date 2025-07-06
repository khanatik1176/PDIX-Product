'use client';
import React, { FC } from 'react';
import { LandingGeneralProps } from '@/types/LandingTypes';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Figure1 from '@/public/Images/Overview-Fig-1.svg';
import Figure2 from '@/public/Images/Overview-Fig-2.svg';
import Figure3 from '@/public/Images/Overview-Fig-3.svg';
import Image from 'next/image';
const LandingOverviewSection: FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  return (
    <div
      className={`px-4 py-24 md:py-28 md:px-4 lg:px-16 xl:px-[120px] 2xl:px-64 ${DarkModeActive ? 'bg-black' : ''}`}
    >
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:gap-4 lg:gap-5 xl:gap-7 2xl:gap-4'>
        <div>
          <h1 className={`w-full max-w-[250px] text-[42px] font-semibold md:max-w-[300px] md:text-2xl lg:max-w-[400px] lg:text-3xl xl:max-w-[550px] xl:text-[42px] xl:leading-[42px] 2xl:max-w-[760px] ${DarkModeActive ? 'text-white' : 'text-black'}`}>
            <span className='text-primary mb-1'>Perfect</span> for Students, Teachers
            & Professionals
          </h1>
          <p className={`w-full max-w-[335px] py-6 text-[20px] font-normal tracking-tighter md:max-w-[320px] md:py-5 md:text-[16px] lg:max-w-[400px] lg:py-6 lg:text-[18px] xl:max-w-[566px] xl:text-[20px] 2xl:max-w-[760px] ${DarkModeActive ? 'text-white' : 'text-black'}`}>
            Built for every kind of learner—whether you&apos;re studying,
            teaching, or leading projects.
          </p>
          <Button className='mt-2 flex h-[44px] items-center justify-center border-b-2 border-deepPrimaryBorder text-[20px] font-medium md:w-[100px] lg:w-[160px]'>
            <span className={`mt-1 flex items-center md:gap-1 md:text-[12px] lg:gap-2 lg:text-[18px] xl:text-[20px] ${DarkModeActive ? 'text-white' : ''}`}>
              Get Started
              <span className='mb-[2px] w-full'>
                <ArrowRight size={32} />
              </span>
            </span>
          </Button>
        </div>
        <div className='flex flex-col gap-6 md:flex-row'>
          <Image
            src={Figure1}
            alt='Overview Figure 1'
            className='w-full md:h-64 md:max-w-[120px] lg:max-w-[160px] xl:max-w-[192px]'
          />
          <Image
            src={Figure2}
            alt='Overview Figure 2'
            className='w-full md:h-64 md:max-w-[120px] lg:max-w-[160px] xl:max-w-[192px]'
          />
          <Image
            src={Figure3}
            alt='Overview Figure 3'
            className='w-full md:h-64 md:max-w-[120px] lg:max-w-[160px] xl:max-w-[192px]'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingOverviewSection;
