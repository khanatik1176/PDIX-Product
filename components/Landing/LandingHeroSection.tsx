'use client';
import React, { FC } from 'react';
import { LandingGeneralProps } from '@/types/Landing.types';
import HeroImage from '@/public/Images/HeroLogo.svg';
import DarkHeroImage from '@/public/Images/DarkHeroLogo.svg';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Bot, HeartHandshake, NotebookPen, Search } from 'lucide-react';

const LandingHeroSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {

  const heroImg = DarkModeActive ? DarkHeroImage : HeroImage;
  const textColor = DarkModeActive ? 'text-white' : 'text-black';
  const placeholderColor = DarkModeActive ? 'placeholder:text-placeholder' : 'placeholder:text-placeholder';

  return (
    <div className='bg-notepad'>
      <div className="flex items-center justify-center py-12 lg:pb-12 lg:pt-16">
        <Image src={heroImg} alt="Hero Image" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className={`pb-6 text-center text-[36px] font-semibold tracking-normal ${textColor} sm:tracking-tighter lg:text-4xl lg:tracking-wider xl:text-[52px] xl:tracking-tight 2xl:tracking-wide`}>
          Take Notes <span className="text-primary">Smarter</span>, Stay
          Organized Always
        </h1>
        <p className={`px-6 text-center text-[16px] font-normal ${textColor} sm:tracking-tighter lg:px-0 lg:text-lg lg:leading-tight lg:tracking-tighter xl:text-[20px]`}>
          Capture ideas, organize thoughts, and boost your productivity — all in
          one powerful app.
        </p>
        <div className="flex w-full items-center justify-center gap-4 pt-12 lg:gap-6 lg:pt-12">
          <div className="relative w-full max-w-[340px] sm:max-w-[530px] lg:max-w-[520px] xl:max-w-[590px]">
            <div className="bg-primary-gradient absolute inset-0 rounded-md p-[2px]">
              <div className="h-full w-full rounded-md bg-white dark:bg-black"></div>
            </div>
            <Input
              placeholder="What topic are you looking for?"
              className={`relative h-[44px] w-full border-0 bg-transparent ${placeholderColor} ${textColor}`}
            />
          </div>
          <Button className="flex h-[44px] w-[44px] items-center justify-center border-b-2 border-deepPrimaryBorder text-[20px] font-medium sm:w-[128px]">
            <span className="block sm:hidden">
              <Search size={24} strokeWidth={3.5} />
            </span>
            <span className="hidden sm:block">Search</span>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center py-12 lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:px-16 lg:pt-24 xl:gap-14 xl:px-[142px] xl:pt-24 2xl:px-80">
          <div className="px-6 sm:pl-[1.5rem] lg:px-0 lg:pt-0 flex flex-col items-start lg:items-start lg:text-left">
            <div className="flex items-center gap-2">
              <span>
                <NotebookPen size={24} color={DarkModeActive ? '#fff' : '#000'} />
              </span>
              <p className={`text-2xl font-medium ${textColor} lg:text-xl xl:text-2xl`}>
                Smart Note Sharing
              </p>
            </div>
            <p className={`w-full pt-2 text-start text-xl font-normal ${textColor} lg:text-base xl:max-w-[500px] xl:text-xl`}>
              Capture ideas, organize thoughts, and boost your productivity —
              all in one powerful app.
            </p>
          </div>
          <div className="px-6 pt-6 sm:pl-[1rem] lg:px-0 lg:pt-0 flex flex-col items-start lg:items-start lg:text-left">
            <div className="flex items-center gap-2">
              <span>
                <HeartHandshake size={24} color={DarkModeActive ? '#fff' : '#000'} />
              </span>
              <p className={`text-2xl font-medium ${textColor} lg:text-xl xl:text-2xl`}>
                Get Answers
              </p>
            </div>
            <p className={`w-full pt-2 text-start text-xl font-normal ${textColor} lg:text-base xl:max-w-[500px] xl:text-xl`}>
              Ask anything and get accurate, helpful answers in seconds—study
              smarter, not harder.
            </p>
          </div>
          <div className="px-6 pt-6 sm:pl-[3.0rem] lg:px-0 lg:pt-0 flex flex-col items-start lg:items-start lg:text-left">
            <div className="flex items-start lg:items-center gap-2">
              <span>
                <Bot size={24} color={DarkModeActive ? '#fff' : '#000'} />
              </span>
              <p className={`text-2xl font-medium ${textColor} lg:text-xl xl:text-2xl`}>
                AI Powered
              </p>
            </div>
            <p className={`w-full pt-2 text-start text-xl font-normal ${textColor} lg:text-base xl:max-w-[560px] xl:text-xl`}>
              Leverage intelligent tools to summarize notes, generate
              flashcards, and prepare for tests effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroSection;