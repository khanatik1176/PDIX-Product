'use client';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import WebDevLg from '@/public/Images/WebDev.svg';
import AppDevLg from '@/public/Images/AppDev.svg';
import SoftwareTestingLg from '@/public/Images/Testing.svg';
import AISolutionLg from '@/public/Images/AI.svg';
import FintechLg from '@/public/Images/Fintech.svg';
import Image from 'next/image';
import { LandingGeneralProps } from '@/types/LandingTypes';
const LandingServicesSection: FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='flex flex-col lg:flex-row lg:gap-16'>
        <div>
          <h1
            className={`${DarkModeActive ? 'text-3xl font-semibold text-[#F6F6F6] lg:text-5xl' : 'text-3xl font-semibold text-textPrimary lg:text-5xl'}`}
          >
            Our <span className='text-primary'>Services</span>
          </h1>
          <p
            className={`leading-normal ${DarkModeActive ? 'w-full pt-6 text-justify text-base font-normal text-textLight lg:text-[20px]' : 'w-full pt-6 text-justify text-base font-normal text-textSecondary lg:text-[20px]'}`}
          >
            From sleek web and mobile solutions to cutting-edge AI and fintech
            products — we craft impactful digital experiences that drive
            innovation. Explore the services that define what we do best.
          </p>
        </div>
        <Button
          variant='priamryex'
          size={'mdex'}
          className='mt-6 w-full max-w-[140px] text-xl font-semibold lg:mb-4'
          onClick={handleContactClick}
        >
          Contact Us
        </Button>
      </div>
      <div className='grid grid-cols-1 gap-8 pt-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-12'>
        <div className='flex h-full w-full items-start gap-16 rounded-md bg-gradientBg lg:block lg:gap-0'>
          <h1 className='pl-6 pt-6 text-base font-bold lg:px-6 lg:pt-6 lg:text-[20px]'>
            Web Development
          </h1>
          <div className='flex justify-center pr-4 pt-6 lg:items-center lg:pl-24 lg:pr-0 lg:pt-16 2xl:pl-0 2xl:pt-14'>
            <Image
              src={WebDevLg}
              alt='Web Development'
              className='h-full max-h-[90px] w-full max-w-[90px] lg:max-h-[150px] lg:max-w-[150px]'
            />
          </div>
        </div>
        <div className='flex h-full w-full items-start gap-16 rounded-md bg-gradientBg lg:block lg:gap-0'>
          <h1 className='pl-6 pt-6 text-base font-bold lg:px-6 lg:pt-6 lg:text-[20px]'>
            App Development
          </h1>
          <div className='flex items-center justify-center pr-4 pt-6 lg:pl-24 lg:pr-0 lg:pt-16 2xl:pl-0 2xl:pt-14'>
            <Image
              src={AppDevLg}
              alt='App Development'
              className='h-full max-h-[90px] w-full max-w-[90px] lg:max-h-[150px] lg:max-w-[150px]'
            />
          </div>
        </div>
        <div className='flex h-full w-full items-start gap-20 rounded-md bg-gradientBg lg:block lg:gap-0'>
          <h1 className='pl-6 pt-6 text-base font-bold lg:px-6 lg:pt-6 lg:text-[20px]'>
            Software Testing
          </h1>
          <div className='flex items-center justify-center pr-4 pt-6 lg:pl-24 lg:pr-0 lg:pt-16 2xl:pl-0 2xl:pt-14'>
            <Image
              src={SoftwareTestingLg}
              alt='Software Testing'
              className='h-full max-h-[90px] w-full max-w-[90px] lg:max-h-[150px] lg:max-w-[150px]'
            />
          </div>
        </div>
        <div className='h-full w-full items-start gap-20 rounded-md bg-gradientBg hidden lg:block lg:gap-0 xl:hidden'>
          <h1 className='pl-6 pt-6 text-base font-bold lg:px-6 lg:pt-6 lg:text-[20px]'>
            AI Solutions
          </h1>
          <div className='flex items-center justify-center pr-4 pt-6 lg:pl-10 lg:pr-0 lg:pt-6 2xl:pl-0 2xl:pt-14'>
            <Image
              src={AISolutionLg}
              alt='Software Testing'
              className='h-full max-h-[90px] w-full max-w-[90px] lg:max-h-[150px] lg:max-w-[150px]'
            />
          </div>
        </div>
        <div className='h-full w-full items-start gap-20 rounded-md bg-gradientBg hidden lg:block lg:gap-0 xl:hidden'>
          <h1 className='pl-6 pt-6 text-base font-bold lg:px-6 lg:pt-6 lg:text-[20px]'>
            Fintech Solutions
          </h1>
          <div className='flex items-center justify-center pr-4 pt-6 lg:pl-10 lg:pr-0 lg:pt-6 lg:pb-2 2xl:pl-0 2xl:pt-14 2xl:pb-0'>
            <Image
              src={FintechLg}
              alt='Software Testing'
              className='h-full max-h-[90px] w-full max-w-[90px] lg:max-h-[150px] lg:max-w-[150px]'
            />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:hidden xl:flex'>
          <div className='flex h-full w-full justify-start gap-[104px] rounded-md bg-gradientBg lg:max-h-[150px] lg:items-center lg:gap-4'>
            <h1 className='pl-6 pt-6 text-base font-bold lg:px-0 lg:pl-4 lg:pt-0 lg:text-[20px] 2xl:px-0 2xl:pl-4'>
              AI Solutions
            </h1>
            <div className='flex items-center justify-center pb-6 pr-4 lg:pb-0 lg:pl-0 lg:pr-0 2xl:pl-0'>
              <Image
                src={AISolutionLg}
                alt='AI Solutions'
                width={90}
                height={90}
              />
            </div>
          </div>
          <div className='flex h-full w-full justify-start gap-16 rounded-md bg-gradientBg lg:max-h-[150px] lg:items-center lg:gap-4'>
            <h1 className='pl-6 pt-6 text-base font-bold lg:px-0 lg:pl-4 lg:pt-0 lg:text-[20px] 2xl:px-0 2xl:pl-4'>
              Fintech Solutions
            </h1>
            <div className='flex items-center justify-center py-2 pr-4 lg:pb-0 lg:pr-4 lg:pt-0 2xl:pr-4'>
              <Image
                src={FintechLg}
                alt='Fintech Solutions'
                width={90}
                height={90}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingServicesSection;
