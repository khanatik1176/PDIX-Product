'use client';
import React, { FC } from 'react';
import ASP from '@/public/logo/net.svg';
import Flutter from '@/public/logo/flutter.svg';
import Next from '@/public/logo/next.svg';
import Nest from '@/public/logo/nest.svg';
import Mongo from '@/public/logo/mongo.svg';
import mysql from '@/public/logo/mysql.svg';
import Postgre from '@/public/logo/postgre.svg';
import python from '@/public/logo/python.svg';
import TechCard from './_components/TechCard';
import WordPress from '@/public/logo/wordpress.svg';
import { LandingGeneralProps } from '@/types/LandingTypes';

const LandingTechSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  return (
    <div
      className={`${
        DarkModeActive
          ? 'bg-[#0F172A] px-12 py-1 lg:my-16 lg:px-36 lg:py-8 2xl:px-[384px]'
          : 'bg-secondary px-12 py-1 lg:my-16 lg:px-36 lg:py-8 2xl:px-[384px]'
      }`}
    >
      <div>
        <h1
          className={`${
            DarkModeActive
              ? 'w-full max-w-[200px] pt-12 text-3xl font-semibold text-[#F6F6F6] lg:max-w-[800px] lg:text-5xl'
              : 'w-full max-w-[200px] pt-12 text-3xl font-semibold text-textPrimary lg:max-w-[800px] lg:text-5xl'
          }`}
        >
          <span className='text-primary'>Technologies</span> We Use
        </h1>
        <p className='w-full pl-2 pt-6 text-base lg:max-w-[1080px] lg:pb-16 lg:text-[20px] xl:max-w-[1500px] leading-normal'>
          We leverage the latest technologies to build scalable, secure, and
          high-performing digital products. From front-end frameworks to cloud
          infrastructure — these are the tools that bring our ideas to life.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-5 pt-5 pb-14 lg:grid-cols-3 lg:gap-5 lg:px-20 lg:pb-10 xl:grid-cols-5 xl:gap-x-6 xl:gap-y-10 2xl:grid-cols-5 2xl:gap-x-10 2xl:gap-y-10 xl:px-24 xl:pb-16 '>
        {/* First Row */}
        <TechCard src={ASP} alt='ASP.NET' label='ASP.NET' />
        <TechCard src={Flutter} alt='Flutter' label='Flutter' />
        <TechCard src={Nest} alt='Nest.js' label='Nest.js' />
        <TechCard src={Mongo} alt='MongoDB' label='MongoDB' />
        <TechCard src={mysql} alt='MySQL' label='MySQL' />

        {/* Second Row */}

        <TechCard
          src={WordPress}
          alt='WordPress'
          label='WordPress'
          className='lg-xl:ml-24 xl:ml-36'
        />
        <TechCard
          src={Next}
          alt='Next.js'
          label='Next.js'
          className='lg-xl:ml-24 xl:ml-36'
        />
        <TechCard
          src={Postgre}
          alt='PostgreSQL'
          label='PostgreSQL'
          className='lg-xl:ml-24 xl:ml-36'
        />
        <TechCard
          src={python}
          alt='Python'
          label='Python'
          className='lg-xl:ml-24 xl:ml-36'
        />
      </div>
    </div>
  );
};

export default LandingTechSection;
