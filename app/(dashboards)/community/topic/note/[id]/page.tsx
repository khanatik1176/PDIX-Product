'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import React, { useState } from 'react';
import NotePageHeading from './_components/NoteHeading';
import NoteUploadSection from './_components/NoteUploadSection';
import FeedBackSection from './_components/FeedBackSection';

const Note = () => {

  return (
    <div>
      <PageHeader title='Note • Scribbbleer' />
      <BreadcrumbWithAvatar
        initialData='Community'
        initialLink='/community'
        secondaryData='Note'
        secondaryLink='/community/note'
      />
      <div className='px-3 lg:px-6'>
        <PageHeading title="Note" className='pl-2 pt-3' />
        <NotePageHeading title="Newton's laws of Motion" className='pl-2 pt-3' />
      </div>
      <NoteUploadSection />
      <FeedBackSection/>
      <div>
      </div>
    </div>
  );
};

export default Note;
