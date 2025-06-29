'use client';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import CustomCard from './_components/CustomCard';
import { LandingGeneralProps } from '@/types/LandingTypes';

const LandingWhoSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='flex-col items-start justify-between flex lg:flex-col lg:justify-start lg:items-start xl:flex-row xl:items-center xl:justify-between'>
        <div className='w-full max-w-[500px] lg:max-w-[830px]'>
          <h1 className='text-3xl font-semibold lg:text-5xl'>
            Who <span className='text-primary'>We</span> Are
          </h1>
          <p
            className={`leading-normal ${DarkModeActive ? 'text-textLight pt-6 text-justify text-xl font-normal lg:text-[20px]' : 'pt-6 text-justify text-xl font-normal text-textSecondary lg:text-[20px]'}`}
          >
            We are a forward-thinking fintech and software solutions provider,
            dedicated to empowering businesses with innovation, security, and
            efficiency. Our cutting-edge technology transforms financial
            operations, streamlines processes, and enhances digital experiences
            to help businesses thrive in a rapidly evolving world.
          </p>
        </div>
        <Button
          variant='priamryex'
          size={'mdex'}
          className='mt-6 text-xl font-semibold lg:mb-4'
          onClick={handleContactClick}
        >
          Contact Us
        </Button>
      </div>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <CustomCard
          title='Our Mission'
          content='To revolutionize fintech and software solutions by delivering
            innovative, secure, and efficient technologies that empower
            businesses and enhance financial experiences.'
          DarkModeActive={DarkModeActive}
        />
        <CustomCard
          title='Our Vision'
          content='To be the global leader in fintech and software innovation,
            driving transformative solutions that redefine industries and
            create lasting value for businesses and communities.'
          DarkModeActive={DarkModeActive}
        />
        <CustomCard
          title='What we do'
          content='We develop cutting-edge fintech and software solutions that streamline operations, enhance security, and drive business growth. From seamless financial integrations to innovative digital experiences, we empower businesses with technology that delivers efficiency and success.'
          className='sm:col-span-2'
          DarkModeActive={DarkModeActive}
        />
      </div>
    </div>
  );
};

export default LandingWhoSection;
