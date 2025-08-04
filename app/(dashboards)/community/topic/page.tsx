'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import React, { useState } from 'react';
import TopicDetails from './_components/TopicDetails';
import TopicToolBar from './_components/TopicToolBar';
import TopicTable from './_components/TopicTable';

const Topic = () => {
  const [viewFile, setViewFile] = useState(false);
  const handleViewFile = () => {
    setViewFile(!viewFile);
  };

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
      </div>
      <div>
        <TopicDetails />
        <TopicToolBar />
        {viewFile ? (
          <div className='px-3 pt-2 md:px-6 lg:px-7 lg:pt-0'> 
          <div className='flex min-h-[300px] flex-col items-center justify-center border border-primary rounded-lg'>
            <div className='mb-6 text-7xl font-semibold text-gray-700'>
              Content coming soon 🥹
            </div>
            <button
              className='rounded-lg bg-primary px-6 py-2 font-medium text-white shadow'
              onClick={handleViewFile}
            >
              Back
            </button>
          </div>
          </div>
        ) : (
          <div className='px-3 pt-2 md:px-6 lg:px-7 lg:pt-0'>
            <TopicTable currentPage={1} handleViewFile={handleViewFile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topic;
