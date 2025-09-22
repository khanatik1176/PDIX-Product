'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HomeImage1 from '../../../public/Images/HomeImage1.svg';
import HomeImage2 from '../../../public/Images/HomeImage2.svg';
import HomeImage3 from '../../../public/Images/HomeImage3.svg';
import HomeImage4 from '../../../public/Images/HomeImage4.svg';
import HomeCard from './_components/HomeCard';
import { UserDetails } from '@/contexts/UserContext';

const Home = () => {
  const { userData } = UserDetails();
  return (
    <div>
      <PageHeader title='Home • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='Home' initialLink='/home' userData={userData} />
      <div className='px-4 md:px-6 lg:px-9 xl:px-6'>
        <PageHeading title='Home' className='pl-2 pt-3' />
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center justify-center py-4 sm:h-[20vh]'>
            <p className='text-[20px] font-normal text-black'>
              Hello{' '}
              <span className='text-primary'>
                {userData === null ? (
                  <span className='inline-block h-5 w-24 animate-pulse rounded bg-gray-200 align-middle' />
                ) : (
                  userData?.identities?.[0]?.identity_data?.full_name || 'John'
                )}
              </span>
            </p>
            <p className='pt-2 text-[24px] font-medium text-black'>
              Welcome to Scribbbleer!{' '}
            </p>
          </div>
          <div className='flex w-full items-center justify-center gap-2 sm:gap-6'>
            <div className='relative w-full max-w-[536px]'>
              <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7e8086]' />
              <Input
                placeholder='What are you looking for?'
                className='w-full pl-10 placeholder:text-[#b2bac5]'
              />
            </div>
            <Button className='w-full max-w-[40px] bg-[#CE7411] sm:max-w-[128px]'>
              <Search className='h-4 w-4 sm:hidden' />
              <span className='hidden sm:inline'>Search</span>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-8 py-[50px] md:py-[56px] xl:px-[118px] 2xl:px-[210px]'>
          <div className='flex w-full flex-col justify-center gap-8 lg:flex-row lg:gap-6 xl:gap-8 2xl:gap-10'>
            <HomeCard
              title='Start contributing'
              description='Share your knowledge to help others grow'
              actionText='Contribute'
              image={HomeImage1}
              imageAlt='Home Image'
              backgroundColor='#FEFAEC'
            />
            <HomeCard
              title='Explore community'
              description='Connect with peers, discover discussions, and learn.'
              actionText='Explore'
              image={HomeImage2}
              imageAlt='Home Image'
              backgroundColor='#FEFAEC'
            />
          </div>
          <div className='flex w-full flex-col justify-center gap-8 lg:flex-row lg:gap-6 xl:gap-8 2xl:gap-10'>
            <HomeCard
              title='Study guide'
              description='Access curated materials to ace your next exam'
              actionText='View'
              image={HomeImage3}
              imageAlt='Home Image'
              backgroundColor='#FEFAEC'
            />
            <HomeCard
              title='Ask questions'
              description='Stuck somewhere? Get help from fellow learners'
              actionText='Ask'
              image={HomeImage4}
              imageAlt='Home Image'
              backgroundColor='#FEFAEC'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
