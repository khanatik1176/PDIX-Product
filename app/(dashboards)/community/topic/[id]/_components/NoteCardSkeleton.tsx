import React from 'react';

const NoteCardSkeleton: React.FC = () => (
  <div className="flex w-full min-w-[320px] max-w-xs animate-pulse flex-col gap-4 rounded-lg bg-white p-4 shadow-md
    sm:mt-6 sm:h-[500px] sm:w-[600px] sm:max-w-[600px] sm:min-w-[600px] sm:gap-8 sm:p-8">
    <div className="flex items-center gap-3 sm:gap-6">
      <div className="h-8 w-8 rounded-full bg-gray-200 sm:h-14 sm:w-14" />
      <div className="h-4 w-24 rounded bg-gray-200 sm:h-6 sm:w-40" />
    </div>
    <div className="h-5 w-3/4 rounded bg-gray-200 sm:h-8 sm:w-2/3" />
    <div className="h-4 w-1/2 rounded bg-gray-200 sm:h-6 sm:w-1/3" />
    <div className="mt-2 flex gap-2 sm:mt-6 sm:gap-6">
      <div className="h-6 w-12 rounded bg-gray-200 sm:h-8 sm:w-20" />
      <div className="h-6 w-12 rounded bg-gray-200 sm:h-8 sm:w-20" />
    </div>
    <div className="mt-4 flex justify-end sm:mt-10">
      <div className="h-8 w-8 rounded-full bg-gray-200 sm:h-12 sm:w-12" />
    </div>
  </div>
);

export default NoteCardSkeleton;