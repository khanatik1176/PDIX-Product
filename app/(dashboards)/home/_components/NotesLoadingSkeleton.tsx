import React from 'react';

const NotesLoadingSkeleton: React.FC = () => {
  return (
    <ul className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <li
          key={i}
          className="flex w-full items-center justify-between rounded-md border bg-white p-3"
        >
          <div className="flex min-w-0 flex-1 items-center gap-x-4">
            <div className="h-6 w-6 rounded bg-gray-200 animate-pulse" />
            <div className="min-w-0">
              <div className="h-4 w-40 rounded bg-gray-200 animate-pulse mb-2" />
              <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NotesLoadingSkeleton;