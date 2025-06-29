import React, { FC } from 'react';
import FooterLogo from '@/public/logo/FooterLogo.svg';
import Image from 'next/image';
import { Mail, MapPin, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { LandingGeneralProps } from '@/types/LandingTypes';
import DarkFooterLogo from '@/public/logo/DarkFooterLogo.svg';
const LandingFooter: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  return (
    <div className='px-12 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='grid grid-cols-1 pt-12 lg:grid-cols-2 lg:gap-[200px] lg:pb-14 lg:pt-32 xl:gap-[430px] 2xl:gap-[420px]'>
        <div className='flex flex-col items-start gap-6'>
          <Image
            src={DarkModeActive ? DarkFooterLogo : FooterLogo}
            alt='Footer-Logo'
          />
          <div
            className={`${DarkModeActive ? 'flex gap-2 text-textLight' : 'flex gap-2 text-textSecondary'}`}
          >
            <span>
              <Mail size={24} />
            </span>{' '}
            <p>info@pentadevIX.com</p>
          </div>
          <div
            className={`${DarkModeActive ? 'flex gap-2 text-textLight' : 'flex gap-2 text-textSecondary'}`}
          >
            <span>
              <Smartphone size={24} />
            </span>{' '}
            <p>+8801618559862</p>
          </div>
          <div
            className={`${DarkModeActive ? 'flex gap-2 text-textLight' : 'flex gap-2 text-textSecondary'}`}
          >
            <span>
              <MapPin size={24} />
            </span>{' '}
            <p>Uttara, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className='flex w-full flex-col gap-12 pt-12 lg:flex-row lg:gap-10 lg:pt-0 xl:gap-[115px] 2xl:gap-[115px]'>
          <div>
            <h1
              className={`${DarkModeActive ? 'text-[20px] font-semibold text-[#F6F6F6]' : 'text-[20px] font-semibold text-black'}`}
            >
              Link
            </h1>
            <div className='mt-4 flex flex-col gap-2'>
              {/* <Link
                href='/#'
                className={`${DarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
              >
                About Us
              </Link>
              <Link
                href='#'
                className={`${DarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
              >
                Show All Services
              </Link> */}
              <Link
                href='casestudies'
                className={`${DarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
              >
                Case Study
              </Link>
              <Link
                href='blogs'
                className={`${DarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
              >
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h1
              className={`${DarkModeActive ? 'text-[20px] font-semibold text-[#F6F6F6]' : 'text-[20px] font-semibold text-black'}`}
            >
              Follow US
            </h1>
            <div className='mt-4 flex flex-col gap-2'>
              <span
                className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
                tabIndex={-1}
                aria-disabled='true'
              >
                Facebook
              </span>
              <span
                className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
                tabIndex={-1}
                aria-disabled='true'
              >
                Linkedin
              </span>
              <span
                className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
                tabIndex={-1}
                aria-disabled='true'
              >
                Instagram
              </span>
              <span
                className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
                tabIndex={-1}
                aria-disabled='true'
              >
                Twitter
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 py-12 lg:flex-row lg:items-center lg:gap-[205px] lg:py-0 xl:gap-[625px] 2xl:gap-[595px]'>
        <p
          className={`pb-2 lg:pb-0 ${DarkModeActive ? 'text-base text-[#BFDBF8]' : 'text-base text-[#133B67]'}`}
        >
          © 2025 PentaDeviX. All rights reserved.
        </p>
        <div className='flex gap-6'>
          {/* <Link href='/'> */}
          <p
            className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
            aria-disabled='true'
          >
            Terms of Service
          </p>
          {/* </Link> */}
          {/* <Link href='/'> */}
          <p
            className={`${DarkModeActive ? 'cursor-not-allowed text-textLight opacity-60' : 'cursor-not-allowed text-textSecondary opacity-60'}`}
            aria-disabled='true'
          >
            Privacy Policy
          </p>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
