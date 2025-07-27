import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import { FolderOpen } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <div>
      <PageHeader title='Home • Scribbbleer' />
      <BreadcrumbWithAvatar initialData='Home' initialLink='/home' />
      <div className='px-3 lg:px-6'>
        <PageHeading title='Home' className='pl-2 pt-3' />
        <div className='flex h-96 flex-col items-center justify-center'>
          <span>
            <FolderOpen size={32} strokeWidth={1} />
          </span>
          <p className='text-xl'>No Data Available</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
