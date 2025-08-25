import React, { FC } from 'react';
import Image from 'next/image';
import { LandingGeneralProps } from '@/types/Landing.types';

// Replace these with your actual image imports
import GooglePlay from '@/public/Images/GooglePlay.svg';
import AppleStore from '@/public/Images/AppleStore.svg';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: 'About us',
    links: [
      { label: 'About Scribbler', href: '#' },
      { label: 'How Scribbler Works', href: '#' },
      { label: 'Advertise with us', href: '#' },
    ],
  },
  {
    title: 'Contact & help',
    links: [
      { label: 'F.A.Q', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Newsroom', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Cookie settings', href: '#' },
    ],
  },
];

const LandingFooter: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const textColor = DarkModeActive ? 'text-white' : 'text-black';
  const sectionBg = DarkModeActive ? 'bg-black' : 'bg-[#E5E5E5F2]';

  return (
    <footer
      className={`px-4 py-12 md:px-8 md:py-16 lg:px-16 xl:px-[120px] 2xl:px-64 ${sectionBg}`}
    >
      <div className='grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:max-w-[1100px] 2xl:max-w-[1300px]'>
        {/* About us, Contact & help, Legal */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h2 className={`mb-4 text-[20px] font-semibold ${textColor}`}>
              {col.title}
            </h2>
            <ul className='flex flex-col gap-4'>
              {col.links.map((link) => (
                <li className='text-[16px]' key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-primary ${textColor}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Get the app */}
        <div>
          <h2 className={`mb-4 text-[20px] font-semibold ${textColor}`}>
            Get the app
          </h2>
          <div className='flex flex-col gap-3'>
            <Link href='#' aria-label='Get on Google Play'>
              <Image
                src={GooglePlay}
                alt='Google Play'
                className='h-[40px] w-[120px]'
              />
            </Link>
            <Link href='#' aria-label='Get on App Store'>
              <Image
                src={AppleStore}
                alt='App Store'
                className='h-[40px] w-[120px]'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-8 md:mt-12 flex flex-col items-start justify-between gap-4 pt-6 md:flex-row md:items-center'>
        {/* Social Icons Left */}
        <div className='flex gap-4 md:order-1'>
          <Button className='mt-2 flex h-10 w-10 items-center justify-center rounded-md border-b-2 border-deepPrimaryBorder bg-white text-[20px] font-medium'>
            <span
              className={`mt-[2px] flex items-center md:gap-1 md:text-[12px] lg:gap-2 lg:text-[18px] xl:text-[20px] ${DarkModeActive ? 'text-deepPrimaryBorder' : 'text-deepPrimaryBorder'}`}
            >
              <span className='mt-[2px] w-full text-deepPrimaryBorder'>
                <Facebook size={24} />
              </span>
            </span>
          </Button>
          <Button className='mt-2 flex h-10 w-10 items-center justify-center rounded-md border-b-2 border-deepPrimaryBorder bg-white text-[20px] font-medium'>
            <span
              className={`mt-[2px] flex items-center md:gap-1 md:text-[12px] lg:gap-2 lg:text-[18px] xl:text-[20px] ${DarkModeActive ? 'text-deepPrimaryBorder' : 'text-deepPrimaryBorder'}`}
            >
              <span className='mt-[2px] w-full text-deepPrimaryBorder'>
                <Instagram size={24} />
              </span>
            </span>
          </Button>
          <Button className='mt-2 flex h-10 w-10 items-center justify-center rounded-md border-b-2 border-deepPrimaryBorder bg-white text-[20px] font-medium'>
            <span
              className={`mt-[2px] flex items-center md:gap-1 md:text-[12px] lg:gap-2 lg:text-[18px] xl:text-[20px] ${DarkModeActive ? 'text-deepPrimaryBorder' : 'text-deepPrimaryBorder'}`}
            >
              <span className='mt-[2px] w-full text-deepPrimaryBorder'>
                <Linkedin size={24} />
              </span>
            </span>
          </Button>
        </div>
        {/* Copyright Right */}
        <p
          className={`pt-6 text-sm md:order-2 ${DarkModeActive ? 'text-gray-400' : 'text-gray-700'}`}
        >
          © 2025-2026 Scribbler. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
