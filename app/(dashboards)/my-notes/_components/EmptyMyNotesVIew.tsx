import { Button } from '@/components/ui/button';
import { BookX, Plus } from 'lucide-react';
import React from 'react';

const EmptyMyNotesVIew = () => {
  return (
    <div className='flex h-[700px] flex-col items-center justify-center px-6'>
      <span>
        <BookX size={32} strokeWidth={1} />
      </span>
      <p className='pt-2 text-xl font-medium'>No notes uploaded yet</p>
      <p className='pt-2 text-sm font-normal text-textSecondary lg:text-xl'>
        Start uploading your notes to see them listed here.
      </p>
      <Button className='mt-4 h-full max-h-[42px] w-full max-w-[140px] cursor-pointer rounded-lg'>
        Upload notes
        <span>
          <Plus size={16} />
        </span>
      </Button>
    </div>
  );
};

export default EmptyMyNotesVIew;
