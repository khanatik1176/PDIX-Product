'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import React from 'react';
import NotePageHeading from './_components/NoteHeading';
import NoteUploadSection from './_components/NoteUploadSection';
import FeedBackSection from './_components/FeedBackSection';
import { getNoteDetailsByID } from '@/helpers/Notes/NotesApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { capitalizeFirstLetter } from '@/constants/globalFunctions';

const Note = () => {

  const {id:noteId} = useParams();

  console.log("THIS IS ID",noteId)

  const { data: note = [], isLoading: isNotesLoading } = useQuery({
    queryKey: ['notes', noteId],
    queryFn: () => getNoteDetailsByID(String(noteId)),
  });

  console.log("Note details are", note);

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
        <PageHeading title='Note' className='pl-2 pt-3' />
        <NotePageHeading
          title={note?.fileUrl}
          subject={capitalizeFirstLetter(note?.topic?.subjectName)}
          classYear={note?.topic?.className}
          totalNotes={note?.topic?.totalNotes}
          isNotesLoading={isNotesLoading}
          className='pl-2 pt-3'
        />
      </div>
      <NoteUploadSection />
      <FeedBackSection />
      <div></div>
    </div>
  );
};

export default Note;
