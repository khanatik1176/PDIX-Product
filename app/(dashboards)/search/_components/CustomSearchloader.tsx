'use client';
import React from 'react';

const CustomSearchLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-8 w-full">
      <div className="w-full space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-64 rounded bg-gray-200 animate-pulse" />
          <div className="h-8 w-20 rounded bg-gray-200 animate-pulse" />
        </div>

        {/* List skeleton */}
        <ul className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded-md border bg-white p-3 shadow-sm"
            >
              <div className="flex min-w-0 flex-1 items-center gap-x-4">
                <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
                <div className="min-w-0">
                  <div className="h-4 w-48 rounded bg-gray-200 animate-pulse mb-2" />
                  <div className="h-3 w-32 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-4 w-10 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-10 rounded bg-gray-200 animate-pulse" />
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination / footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
            <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearchLoader;