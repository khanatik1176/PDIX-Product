'use client';
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import EmptyMyNotesVIew from './_components/EmptyMyNotesVIew';
import MyNotesToolbar from './_components/MyNotesToolbar';
import MyNotesCard from './_components/MyNotesCard';
import { getAllNotes } from '@/helpers/Notes/NotesApi';
import { useQuery } from '@tanstack/react-query';
import Preview1 from '../../../public/Images/Preview-1.svg';
import CustomLoader from '@/components/CustomLoader';
import { UserDetails } from '@/contexts/UserContext';

const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('last-added');
  const [modalOpen, setModalOpen] = useState(false);

    const { userData } = UserDetails();

  const handleUpload = () => {
    setModalOpen(true);
    console.log('Upload Notes clicked');
  };

  const { data: notes = [], isLoading: isNotesLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: getAllNotes,
  });

  return (
    <div>
      <PageHeader title='My Notes • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='My Notes' initialLink='/my-notes' userData={userData} />
      <div className='px-3 lg:px-6'>
        <PageHeading title='My notes' className='pl-2 pt-3' />
        <div>
          <MyNotesToolbar
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            onUpload={handleUpload}
            open={open}
            setOpen={setOpen}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        </div>
        {isNotesLoading ? (
          <div className="h-[600px]">
            <CustomLoader />
          </div>
        ) : notes.length === 0 ? (
          <EmptyMyNotesVIew setModalOpen={setModalOpen} modalOpen={modalOpen} />
        ) : (
          <div className='mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 md:gap-x-6 md:gap-y-5 lg:grid-cols-3 xl:grid-cols-4'>
            {notes.map(
              (
                note: { fileUrl: string; imageSrc: string; iconType: string, id: string },
              ) => (
                <MyNotesCard
                  key={note.id}
                  title={note.fileUrl}
                  imageSrc={note.imageSrc ?? Preview1}
                  iconType={
                    note.iconType === 'file' || note.iconType === 'link'
                      ? note.iconType
                      : 'file'
                  }
                  id={note.id}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;