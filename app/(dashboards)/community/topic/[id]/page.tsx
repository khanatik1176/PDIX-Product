'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import React from 'react';
import NotePageHeading from './_components/NoteHeading';
import NoteUploadSection from './_components/NoteUploadSection';
import {getTopicDetailsByID } from '@/helpers/Notes/NotesApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { capitalizeFirstLetter } from '@/constants/globalFunctions';

const Topic = () => {

  const {id:topicId} = useParams();

  console.log("THIS IS ID",topicId)

  const { data: topic = [], isLoading: isTopicLoading } = useQuery({
    queryKey: ['notes', topicId],
    queryFn: () => getTopicDetailsByID(String(topicId)),
  });

  console.log("Note details are", topic);

  return (
    <div>
      <PageHeader title='Topic • Scribbbleer' />
      <BreadcrumbWithAvatar
        initialData='Community'
        initialLink='/community'
        secondaryData='Topic'
        secondaryLink='/community/topic'
      />
      <div className='px-3 lg:px-6'>
        <PageHeading title='Topic' className='pl-2 pt-3' />
        <NotePageHeading
          title={topic?.topicName}
          subject={capitalizeFirstLetter(topic?.subjectName)}
          classYear={topic?.className}
          totalNotes={topic?.totalNotes}
          isTopicLoading={isTopicLoading}
          className='pl-2 pt-3'
        />
      </div>
      <NoteUploadSection 
        notes={topic?.notes || []}
      />
    </div>
  );
};

export default Topic;
