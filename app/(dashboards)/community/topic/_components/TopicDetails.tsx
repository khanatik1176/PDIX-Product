import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import React from 'react';

const TopicDetails = () => {
  return (
    <div className='px-3 py-3 md:px-5 md:py-5 lg:px-8 lg:py-6'>
      {/* Desktop */}
      <div className='hidden lg:flex bg-[#FEFAEC] h-[88px] py-4 pl-8 items-center justify-between rounded-2xl shadow-md'>
        <div>
          <p className='text-xl font-semibold text-black'>
            Newton&apos;s Law of Motion
          </p>
          <div className='flex items-center gap-6 pt-2'>
            <p className='text-sm font-normal text-black'>Subject: Physics</p>
            <p className='text-sm font-normal text-black'>
              Class/Year: Grade 10
            </p>
            <p className='text-sm font-normal text-black'>Total notes: 62</p>
          </div>
        </div>
        <div>
          <Button className='flex h-10 w-20 items-center gap-2 bg-white text-black mr-8'>
            <Bookmark />
            Save
          </Button>
        </div>
      </div>
      {/* Mobile */}
      <div className='flex lg:hidden bg-[#FEFAEC] py-4 px-4 items-center justify-between rounded-2xl shadow-md'>
        <div className='flex-1'>
          <p className='text-lg font-semibold text-black'>
            Newton&apos;s Law of Motion
          </p>
          <div className='flex items-center gap-4 pt-2'>
            <p className='text-sm font-normal text-black'>Subject: Physics</p>
            <p className='text-sm font-normal text-black'>Class/Year: Grade 10</p>
          </div>
          <p className='text-sm font-normal text-black pt-2'>Total notes: 62</p>
        </div>
        <Button className='flex h-10 w-10 items-center justify-center bg-white text-black ml-4'>
          <Bookmark />
        </Button>
      </div>
    </div>
  );
};

export default TopicDetails;