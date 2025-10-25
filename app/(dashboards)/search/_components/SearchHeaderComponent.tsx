// ...existing code...
'use client';
import React from 'react';
import AvatarMenu from '@/components/AvatarMenu';
import { Bell, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SearchHeaderProps } from '@/types/Global.types';

const SearchHeaderComponent: React.FC<SearchHeaderProps> = ({
  title,
  userData,
}) => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between py-4 pb-6 lg:pt-2'>
      <div className='flex items-center'>
        <button
          type='button'
          aria-label='Go back'
          onClick={() => router.back()}
          className='mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#CE7411] text-white hover:bg-[#b55f0d] focus:outline-none focus:ring-2 focus:ring-[#CE7411]/50 focus:ring-offset-2'
        >
          <ArrowLeft className='h-4 w-4' />
        </button>

        <h1 className='truncate text-base font-semibold leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          {title}
        </h1>
      </div>

      <span className='hidden items-center gap-4 pr-2 md:flex'>
        <Bell className='h-5 w-5 cursor-pointer text-black' />
        <AvatarMenu userData={userData} />
      </span>
    </div>
  );
};

export default SearchHeaderComponent;
// ...existing code...
