'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const TopicToolBar = () => {
  return (
    <div className='w-full px-3 pb-2 md:px-6 md:pb-2 lg:px-8 lg:pb-6'>
      <div className='hidden w-full items-center justify-between gap-4 sm:flex'>
        <Input placeholder='Search' className='w-full max-w-md' />
        <Button className='w-[130px] h-[42px]'>
          Upload Note
          <span>
            <Plus />
          </span>
        </Button>
      </div>

      {/* Mobile */}
      <div className='flex w-full flex-col gap-3 sm:hidden'>
        <Input placeholder='Search' className='w-full' />
        <Button className='w-full text-white'>
          Upload Note{' '}
          <span>
            <Plus />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TopicToolBar;
