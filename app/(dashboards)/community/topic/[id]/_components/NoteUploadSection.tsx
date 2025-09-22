/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useRef, useEffect, FC } from 'react';
import {
  FileText,
  File,
} from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { GenericTable } from '@/components/GenericTable';
import { GenericPagination } from '@/components/GenericPagination';
import { Badge } from '@/components/ui/badge';
import { TopicNoteUploadType } from '@/types/Note.types';
import NoteCard from './NoteCard';
import ViewModeToggle from './ViewModeToggle';
import NoteFilters from './NoteFilters';
import NoteCardSkeleton from './NoteCardSkeleton';

const NoteUploadSection: FC<TopicNoteUploadType> = ({
  notes,
  topicNoteLoading,
}) => {
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterSort, setFilterSort] = useState<string>('uploaded');
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const handleScrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -370, behavior: 'smooth' });
  };
  const handleScrollRight = () => {
    carouselRef.current?.scrollBy({ left: 370, behavior: 'smooth' });
  };
  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  };
  useEffect(() => {
    updateScrollState();
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const mappedNotes = notes.map((n: any, idx: number) => ({
    id: n.noteId || idx,
    type: n.fileName?.toLowerCase().includes('.pdf') ? 'PDF' : 'DOC',
    name: n.title,
    uploadedTime: n.uploadDate
      ? new Date(n.uploadDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '',
    feedbacks: Number(n.totalFeedbacks) || 0,
    likes: Number(n.totalRatings) || 0,
    ratings: Number(n.totalRatings) || 0, // or use a separate field if you have average rating
    icon: n.fileName?.toLowerCase().includes('.pdf') ? (
      <FileText className='h-5 w-5 text-gray-700' />
    ) : (
      <File className='h-5 w-5 text-gray-700' />
    ),
  }));

  const filteredNotes = mappedNotes
    .filter((n) => (filterType === 'all' ? true : n.type === filterType))
    .sort((a, b) => {
      if (filterSort === 'uploaded')
        return mappedNotes.indexOf(a) - mappedNotes.indexOf(b);
      if (filterSort === 'downloads') return b.feedbacks - a.feedbacks; // repurposed
      if (filterSort === 'upvotes') return b.likes - a.likes; // repurposed
      return 0;
    });

  const TopicTableColumn: ColumnDef<any>[] = [
    {
      accessorKey: 'type',
      header: 'Type',
      cell: ({ getValue }) => (
        <div className='text-center'>
          <Badge variant='lightgray'>{getValue() as string}</Badge>
        </div>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ getValue }) => (
        <div className='text-start'>
          <Badge variant='lightteal'>{getValue() as string}</Badge>
        </div>
      ),
    },
    {
      accessorKey: 'uploadedTime',
      header: 'Uploaded',
      cell: ({ getValue }) => (
        <div className='ml-5 text-center'>
          <Badge variant='lightorange'>{getValue() as string}</Badge>
        </div>
      ),
    },
    {
      accessorKey: 'feedbacks',
      header: 'Feedbacks',
      cell: ({ getValue }) => (
        <div className='text-center'>
          <Badge variant='lightblue'>{getValue() as number}</Badge>
        </div>
      ),
    },
    {
      accessorKey: 'likes',
      header: 'Likes',
      cell: ({ row }) => {
        const isLiked = liked[row.original.id];
        return (
          <div className='ml-2 text-center'>
            <Badge variant='lightgreen'>
              {row.original.likes + (isLiked ? 1 : 0)}
            </Badge>
          </div>
        );
      },
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className='px-3 lg:px-6'>
      <div className='mb-4 flex flex-col justify-between gap-4 lg:flex-row'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold md:text-2xl'>Uploads</h1>
          <div className='hidden items-center gap-4 md:flex lg:hidden'>
            <ViewModeToggle
              viewMode={viewMode}
              setViewMode={setViewMode}
              handleScrollLeft={handleScrollLeft}
              handleScrollRight={handleScrollRight}
              isAtStart={isAtStart}
              isAtEnd={isAtEnd}
              showArrows={true}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <NoteFilters
            filterType={filterType}
            setFilterType={setFilterType}
            filterSort={filterSort}
            setFilterSort={setFilterSort}
          />
          <div className='flex items-center justify-end gap-4 md:hidden lg:flex'>
            <ViewModeToggle
              viewMode={viewMode}
              setViewMode={setViewMode}
              handleScrollLeft={handleScrollLeft}
              handleScrollRight={handleScrollRight}
              isAtStart={isAtStart}
              isAtEnd={isAtEnd}
              showArrows={true}
            />
          </div>
        </div>
      </div>

      {viewMode === 'card' ? (
        <div className='overflow-hidden'>
          <div
            ref={carouselRef}
            className='no-scrollbar flex gap-4 overflow-x-auto scroll-smooth'
          >
            {topicNoteLoading ? (
              <>
                <div className='hidden gap-4 sm:flex'>
                  {[1, 2, 3].map((i) => (
                    <NoteCardSkeleton key={i} />
                  ))}
                </div>
                <div className='flex w-full flex-col gap-4 sm:hidden'>
                  <NoteCardSkeleton />
                </div>
              </>
            ) : (
              filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  isLiked={liked[note.id]}
                  onLike={toggleLike}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <>
          <GenericTable
            columns={TopicTableColumn}
            data={paginatedNotes}
            totalCountAndLimit={{
              totalCount: filteredNotes.length,
              size: pageSize,
            }}
            headerClassNames={{
              type: 'text-center w-1',
              name: 'text-start w-72',
              uploadedTime: 'text-center w-32',
              feedbacks: 'text-center w-32',
              likes: 'text-center w-32',
            }}
            cellClassNames={{
              type: 'text-center w-1',
              name: 'text-start w-72',
              uploadedTime: 'text-start w-32',
              feedbacks: 'text-center w-32',
              likes: 'text-center w-32',
            }}
            currentPage={currentPage}
            loading={false}
            refetch={() => {}}
            PaginationComponent={({ currentPage, totalPage, onPageChange }) => (
              <GenericPagination
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={onPageChange}
                basePath='/your-path'
              />
            )}
          />
        </>
      )}
    </div>
  );
};
export default NoteUploadSection;
