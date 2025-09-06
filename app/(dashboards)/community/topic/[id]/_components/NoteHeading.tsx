import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { INoteHeadingProps } from '@/types/Note.types';
import { Bookmark, BookOpen, GraduationCap, FileText } from 'lucide-react';
import NoteSkeleton from './NoteSkeleton';

const NotePageHeading: FC<INoteHeadingProps> = ({
  title,
  subTitle,
  titleclassName,
  subTitleClassName,
  className,
  subject = 'Physics',
  classYear = 'Grade 10',
  totalNotes = 62,
  isTopicLoading,
}) => {
  return (
    <div
      className={cn(
        'my-4 flex flex-row items-start justify-between rounded-2xl border border-[#FBF0CA] bg-white p-4 md:my-6 md:p-6 lg:flex-row lg:items-center',
        className
      )}
    >
      <div className='flex flex-col'>
        {isTopicLoading ? (
          <NoteSkeleton className='h-6 w-48' />
        ) : (
          <h3
            className={cn('text-2xl font-semibold md:text-2xl', titleclassName)}
          >
            {title}
          </h3>
        )}
        {isTopicLoading ? (
          <NoteSkeleton className='mt-2 h-4 w-32' />
        ) : subTitle ? (
          <p
            className={cn(
              'text-md pt-2 text-subHeading md:text-sm',
              subTitleClassName
            )}
          >
            {subTitle}
          </p>
        ) : null}
        <div className='mt-3 flex flex-col items-start gap-4 lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
            {isTopicLoading ? (
              <NoteSkeleton className='h-6 w-40' />
            ) : (
              <span className='flex items-center gap-2 rounded-md border bg-white px-3 py-1 text-sm font-medium text-black'>
                <BookOpen className='h-4 w-4' />
                <strong>Subject:</strong> {subject}
              </span>
            )}

            {isTopicLoading ? (
              <NoteSkeleton className='h-6 w-40' />
            ) : (
              <span className='flex items-center gap-2 rounded-md border bg-white px-3 py-1 text-sm font-medium text-black'>
                <GraduationCap className='h-4 w-4' />
                <strong>Class/Year:</strong> {classYear}
              </span>
            )}
          </div>

          {isTopicLoading ? (
            <NoteSkeleton className='h-6 w-40' />
          ) : (
            <span className='flex items-center gap-2 rounded-md border bg-white px-3 py-1 text-sm font-medium text-black'>
              <FileText className='h-4 w-4' />
              <strong>Total Notes:</strong> {totalNotes}
            </span>
          )}
        </div>
      </div>
      {isTopicLoading ? (
        <NoteSkeleton className='h-10 w-24' />
      ) : (
        <button
          className='mt-10 flex items-center gap-2 rounded-[6px] bg-lightAquaBg px-4 py-2 shadow-md transition hover:bg-gray-100 lg:mt-0'
          title='Save'
        >
          <Bookmark className='h-5 w-5 text-gray-700' />
          <span className='hidden text-sm font-medium text-gray-700 xl:inline'>
            Save
          </span>
        </button>
      )}
    </div>
  );
};

export default NotePageHeading;