
import React, { FC } from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

const NoteSkeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={cn('animate-pulse bg-gray-200 rounded-md', className)}></div>
  );
};

export default NoteSkeleton;