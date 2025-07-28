'use client';
import React from 'react';
import { BookX, Plus } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import PageHeading from '@/components/pageHeading';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import { Button } from '@/components/ui/button';

const MyNotes = () => {
  return (
    <div>
      <PageHeader title='My Notes • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='My Notes' initialLink='/my-notes' />
      <div className='px-3 lg:px-6'>
        <PageHeading title='My Notes' className='pl-2 pt-3' />
        <div className='flex h-[700px]  flex-col items-center justify-center px-6'>
          <span>
            <BookX size={32} strokeWidth={1} />
          </span>
          <p className='pt-2 text-xl font-medium'>No notes uploaded yet</p>
          <p className='pt-2 text-sm lg:text-xl font-normal text-textSecondary'>
            Start uploading your notes to see them listed here.
          </p>
          <Button className='mt-4 w-full max-w-[140px] h-full max-h-[42px] rounded-lg cursor-pointer'>
            Upload notes
            <span>
              <Plus size={16} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
