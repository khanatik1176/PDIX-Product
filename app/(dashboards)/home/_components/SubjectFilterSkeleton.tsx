import React, { FC } from 'react';

const SubjectFilterSkeleton: FC = () => {
  return (
    <div className="w-full">
      <div className="h-5 w-40 rounded bg-gray-200 animate-pulse mb-3" />
      <ul className="space-y-2 max-h-56 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-28 rounded bg-gray-200 animate-pulse" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectFilterSkeleton;