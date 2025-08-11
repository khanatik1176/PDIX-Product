import React from 'react';
import AvatarMenu from '@/components/AvatarMenu';
import GlobalBreadCrumb from '@/components/globalBreadCrumb';
import { Bell } from 'lucide-react';

interface BreadcrumbWithAvatarProps {
  initialData: string;
  initialLink: string;
  secondaryData?: string;
  secondaryLink?: string;
}

const BreadcrumbWithAvatar: React.FC<BreadcrumbWithAvatarProps> = ({
  initialData,
  initialLink,
  secondaryData,
  secondaryLink,
}) => {
  return (
    <div className='flex items-center justify-between px-3 pt-4 lg:px-6'>
      <GlobalBreadCrumb
        initialData={initialData}
        initalLink={initialLink}
        secondayData={secondaryData}
        secondayLink={secondaryLink}
      />
      <span className='hidden items-center gap-4 pr-2 md:flex'>
        <Bell className='h-5 w-5 cursor-pointer text-black' />
        <AvatarMenu />
      </span>
    </div>
  );
};

export default BreadcrumbWithAvatar;
