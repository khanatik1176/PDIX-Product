import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import React from 'react';
import CommunityToolBar from './_components/CommunityToolBar';
import CommunityTable from './_components/CommunityTable';

const Community = () => {
  return (
    <div>
      <PageHeader title='Community • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='Community' initialLink='/community' />
      <div className='px-3 lg:px-6'>
        <PageHeading title='Community' className='pl-2 pt-3' />
      </div>
      <CommunityToolBar />
      <div className='px-6 pt-2 lg:pt-10'>
        <CommunityTable currentPage={1} />
      </div>
    </div>
  );
};

export default Community;
