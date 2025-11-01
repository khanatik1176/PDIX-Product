import { LibraryCardProps } from '@/types/Library.types';
import React from 'react';

const LibraryCard: React.FC<LibraryCardProps> = ({ title, value, isAnalyticsLoading }) => (
  <div className='mt-1 flex flex-col items-center rounded-lg border border-[#FBF0CA] bg-white p-4 shadow-md'>
    <span className='text-lg font-semibold text-gray-500'>{title}</span>

    {isAnalyticsLoading ? (
      <div className='mt-2 h-6 w-28 rounded bg-gray-200 animate-pulse' aria-hidden='true' />
    ) : (
      <span className='mt-2 text-2xl font-bold text-black'>
        {value ?? '—'}
      </span>
    )}
  </div>
);

export default LibraryCard;