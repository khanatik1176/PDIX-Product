'use client';
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import EmptyMyNotesVIew from './_components/EmptyMyNotesVIew';
import MyNotesToolbar from './_components/MyNotesToolbar';
import MyNotesCard from './_components/MyNotesCard';
import { notesData } from '@/utils/TempData/MynotesData';
const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('last-added');

  const handleUpload = () => {
    // Handle the upload logic here
    console.log('Upload Notes clicked');
  };

  return (
    <div>
      <PageHeader title='My Notes • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='My Notes' initialLink='/my-notes' />
      <div className='px-3 lg:px-6'>
        <PageHeading title='My notes' className='pl-2 pt-3' />
        <div>
          <MyNotesToolbar
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            onUpload={handleUpload}
            open={open}
            setOpen={setOpen}
          />
        </div>
        {notesData.length === 0 ? (
          <EmptyMyNotesVIew />
        ) : (
          <div className='mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 md:gap-x-6 md:gap-y-5 lg:grid-cols-3 xl:grid-cols-4'>
            {notesData.map((note, idx) => (
              <MyNotesCard
                key={idx}
                title={note.title}
                imageSrc={note.imageSrc}
                iconType={note.iconType === 'file' || note.iconType === 'link' ? note.iconType : 'file'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
