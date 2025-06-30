'use client';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import React, { FC, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLogo from '@/public/logo/NavLogo.svg';
import SmallNavLogo from '@/public/logo/SmallNavLogo.svg';
import DarkNavLogo from '@/public/logo/DarkNavLogo.svg';
import DarkSmallNavLogo from '@/public/logo/DarkSmallNavLogo.svg';
import { LandingGeneralProps } from '@/types/LandingTypes';
import Link from 'next/link';
import { ModeContext } from '@/contexts/ModeContext';
import { Button } from '../ui/button';
import { ThemeSwitch } from './_components/ThemeSwitch';

const LandingNav: FC<LandingGeneralProps> = ({ isDarkModeActive }) => {
  const { toggleMode } = useContext(ModeContext) as ModeContextType;

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <nav className='sticky top-0 z-50'>
      <div
        className={` ${isDarkModeActive ? 'flex min-h-20 w-full items-center justify-between bg-[#0A0A0AF2] shadow-lg' : 'flex min-h-20 w-full items-center justify-between bg-white shadow-lg'}`}
      >
        <div className='hidden items-center justify-start lg:flex lg:pl-[80px] xl:pl-[120px] 2xl:pl-[120px]'>
          <Link href={'/'}>
            <Image
              src={isDarkModeActive ? DarkNavLogo : NavLogo}
              alt='logo'
              className='pl-5 xl:py-9 2xl:py-9'
            />
          </Link>
        </div>
        <div className='flex items-center justify-start lg:hidden'>
          <Link href={'/'}>
            <Image
              src={isDarkModeActive ? DarkSmallNavLogo : SmallNavLogo}
              width={200}
              height={32}
              alt='logo'
              className='py-6 pl-5'
            />
          </Link>
        </div>

        <ul className='hidden items-center justify-end gap-6 2xl:gap-6 lg:pr-[80px] xl:pr-[120px] 2xl:pr-[120px] lg:flex lg:pt-2 xl:pt-2 2xl:pt-2'>
          {/* <Link href={'/about'}>
            <li
              className={`cursor-pointer ${isDarkModeActive ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-primary'}`}
            >
              About
            </li>
          </Link> */}
          <li>
            <ThemeSwitch
              isDarkMode={!!isDarkModeActive}
              toggleMode={toggleMode}
            />
          </li>
          <li>
            <Button
              className={`bg-transparent ${isDarkModeActive ? 'text-white' : 'text-black'}`}
            >
              Sign in
            </Button>
          </li>
          <li>
            <Button className='rounded-[6px] border-b-2 border-deepPrimaryBorder px-4 py-2'>
              Sign up
            </Button>
          </li>
        </ul>
        <div className='flex items-center justify-end gap-5 pr-10 lg:hidden'>
          <Menu size={20} className='cursor-pointer' onClick={toggleSheet} />
        </div>
      </div>

      {/* Sheet */}
      <AnimatePresence>
        {isSheetOpen && (
          <motion.div
            className={`fixed inset-0 z-50 ${isDarkModeActive ? 'bg-black' : 'bg-white'} px-6 py-6 lg:hidden`}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Header */}
            <div
              className={`${isDarkModeActive ? 'flex min-h-20 w-full items-center justify-between rounded-xl bg-[#3D3D3D69] px-6 py-4 shadow-sm' : 'flex min-h-20 w-full items-center justify-between rounded-xl px-6 py-4 shadow-sm'}`}
            >
              <X size={24} className='cursor-pointer' onClick={toggleSheet} />
              <div className='rounded-xl bg-primary p-2'>
                {isDarkModeActive ? (
                  <Moon
                    size={24}
                    className='cursor-pointer text-white'
                    strokeWidth={1.5}
                    onClick={toggleMode}
                  />
                ) : (
                  <Sun
                    size={24}
                    className='cursor-pointer text-white'
                    strokeWidth={1.5}
                    onClick={toggleMode}
                  />
                )}
              </div>
            </div>

            {/* Navigation Links */}
            <div className='mt-10 flex flex-col items-start gap-6 px-8'>
              {/* <div
                className={`cursor-pointer text-[20px] font-semibold ${
                  isDarkModeActive ? 'text-white' : 'text-primary'
                }`}
              >
                About
              </div> */}
              <Link href={'/blogs'}>
                <div
                  onClick={toggleSheet}
                  className={`cursor-pointer text-[20px] font-semibold ${
                    isDarkModeActive ? 'text-white' : 'text-primary'
                  }`}
                >
                  Blog
                </div>
              </Link>
              <Link href={'/casestudies'}>
                <div
                  className={`flex cursor-pointer items-center gap-1 text-[20px] font-semibold ${
                    isDarkModeActive ? 'text-white' : 'text-primary'
                  }`}
                  onClick={toggleSheet}
                >
                  Case Studies
                </div>
              </Link>
            </div>

            {/* Small Logo at the Bottom */}
            <Link href={'/'}>
              <div
                className='absolute bottom-12 left-1/2 -translate-x-1/2 transform'
                onClick={toggleSheet}
              >
                <Image
                  src={isDarkModeActive ? DarkNavLogo : NavLogo}
                  width={180}
                  height={24}
                  alt='Small Logo'
                />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default LandingNav;
