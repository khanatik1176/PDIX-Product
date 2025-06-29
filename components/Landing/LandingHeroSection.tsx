'use client';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import HeroImage from '@/public/Images/HeroImg.svg';
import Background from '@/public/Images/bg-hero-image.svg';
import Image from 'next/image';
import SmallBg from '@/public/Images/smallbg.svg';
import { LandingGeneralProps } from '@/types/LandingTypes';

const LandingHeroSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='px-12 py-8 lg:px-36 lg:py-16 2xl:px-[384px]'>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='w-full'>
          <h1 className='w-full max-w-[300px] text-[32px] font-semibold leading-tight lg:max-w-[550px] lg:text-[58px]'>
            Building the <span className='text-primary'>Future</span> of
            Technology
          </h1>
          <p
            className={` ${DarkModeActive ? 'w-full pt-6 text-[20px] font-normal text-textLight lg:max-w-[550px]' : 'w-full pt-6 text-[20px] font-normal text-textSecondary lg:max-w-[700px]'}`}
          >
            Delivering cutting-edge Web & Mobile Apps, AI-driven Solutions, and
            Reliable Software Testing Services to power your digital
            transformation.
          </p>
          <Button
            variant='priamryex'
            size={'mdex'}
            className='mt-8 text-xl font-semibold'
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
        <div className='hidden justify-start lg:flex lg:justify-end'>
          <Image src={Background} alt='Background' className='relative z-10' />
          <Image
            src={HeroImage}
            alt='Hero'
            className='lg-xl:top-[168px] absolute z-10 lg:right-[70px] lg:top-[243px] lg:w-[400px] xl:right-10 xl:top-[168px] xl:w-[472px] 2xl:right-[300px] 2xl:top-[168px] 2xl:w-[472px]'
          />
        </div>
        <div className='flex justify-center lg:hidden'>
          {/* Relative container for consistent positioning */}
          <div className='relative h-[300px] w-full max-w-[300px]'>
            <Image
              src={SmallBg}
              alt='Background'
              className='absolute left-0 top-0 z-0 h-[324px] w-[280px] object-contain'
            />
            <Image
              src={HeroImage}
              alt='Hero'
              className='absolute left-7 top-[30px] z-10 h-full w-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroSection;
