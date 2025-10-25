// ...existing code...
'use client';
import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { IHeadingProps } from '@/types/Global.types';
import AvatarMenu from '@/components/AvatarMenu';
import { Bell } from 'lucide-react';

const PageHeading: FC<IHeadingProps & { isHome?: boolean; userData?: any }> = ({
  title,
  subTitle,
  titleclassName,
  subTitleClassName,
  className,
  isHome,
  userData,
}) => {
  return (
    <div className={cn(className, 'flex items-center justify-between')}>
      <div className="min-w-0">
        <h3 className={cn('text-2xl md:text-2xl font-semibold', titleclassName)}>
          {title}
        </h3>
        {subTitle ? (
          <p className={cn('text-md md:text-sm text-subHeading pt-2', subTitleClassName)}>
            {subTitle}
          </p>
        ) : null}
      </div>

      {isHome ? (
        <span className="hidden items-center gap-4 pr-2 md:flex pb-5">
          <Bell className="h-5 w-5 cursor-pointer text-black" />
          <AvatarMenu userData={userData} />
        </span>
      ) : null}
    </div>
  );
};

export default PageHeading;
