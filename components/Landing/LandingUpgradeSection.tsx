'use client';
import { LandingGeneralProps } from '@/types/Landing.types';
import { FC } from 'react';
import UpgradeFigure from '@/public/Images/Upgrade-Fig.svg';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const LandingUpgradeSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  return (
    <div
      className={`flex flex-col px-8 py-8 md:flex-row gap-12 md:px-4 md:py-28 lg:px-16 xl:px-[120px] 2xl:px-64 ${DarkModeActive ? 'bg-primary' : 'bg-primary'}`}
    >
      <Image src={UpgradeFigure} alt='Upgrade Figure' />
      <div>
        <h1 className='text-[42px] md:text-[30px] lg:text-[42px] font-semibold text-white tracking-wide max-w-[350px] lg:max-w-[800px]'>
          Upgrade the Way You Share Notes
        </h1>
        <p className='py-6 text-[20px] md:text-[16px] lg:text-[20px] font-normal tracking-tighter text-white max-w-[350px] lg:max-w-[800px]'>
          Join thousands of learners already boosting their productivity—on any
          device, anytime.
        </p>
        <Button className='mt-2 flex h-[44px] items-center justify-center border-b-2 border-deepPrimaryBorder bg-white text-[20px] font-medium md:w-[100px] lg:w-[160px]'>
          <span
            className={`mt-[2px] flex items-center md:gap-1 md:text-[12px] lg:gap-2 lg:text-[18px] xl:text-[20px] ${DarkModeActive ? 'text-primary' : 'text-primary'}`}
          >
            Get Started
            <span className='mt-[2px] w-full text-primary'>
              <ArrowRight size={32} />
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default LandingUpgradeSection;
