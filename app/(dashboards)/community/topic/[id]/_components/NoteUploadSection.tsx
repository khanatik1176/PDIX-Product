'use client';
import React, { useState, useRef, useEffect, FC } from 'react';
import {
  FileText,
  File,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  List,
  Grid,
  Star,
  MessageCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ColumnDef } from '@tanstack/react-table';
import { GenericTable } from '@/components/GenericTable';
import { GenericPagination } from '@/components/GenericPagination';
import { Badge } from '@/components/ui/badge';
import { TopicNoteUploadType } from '@/types/Note.types';

const NoteUploadSection: FC<TopicNoteUploadType> = ({ notes }) => {
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
      if (filterSort === 'uploaded') return mappedNotes.indexOf(a) - mappedNotes.indexOf(b);
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
            <button
              onClick={() =>
                setViewMode(viewMode === 'card' ? 'table' : 'card')
              }
              className='rounded-full bg-primary p-2 text-white'
            >
              {viewMode === 'card' ? (
                <List className='h-5 w-5' />
              ) : (
                <Grid className='h-5 w-5' />
              )}
            </button>
            <button
              onClick={handleScrollLeft}
              disabled={isAtStart}
              className={`rounded-full p-2 ${
                isAtStart || viewMode === 'table'
                  ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                  : 'bg-primary text-white'
              }`}
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={handleScrollRight}
              disabled={isAtEnd}
              className={`rounded-full p-2 ${
                isAtEnd || viewMode === 'table'
                  ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                  : 'bg-primary text-white'
              }`}
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex w-full gap-4 md:flex-row md:items-center'>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className='flex w-48 items-center justify-between'>
                <SelectValue placeholder='Filter by Type' />
                <ChevronDown className='h-4 w-4 text-gray-500' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All</SelectItem>
                <SelectItem value='PDF'>PDF</SelectItem>
                <SelectItem value='DOC'>DOC</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterSort} onValueChange={setFilterSort}>
              <SelectTrigger className='flex w-48 items-center justify-between'>
                <SelectValue placeholder='Sort by' />
                <ChevronDown className='h-4 w-4 text-gray-500' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='uploaded'>Uploaded</SelectItem>
                <SelectItem value='downloads'>Feedbacks</SelectItem>
                <SelectItem value='upvotes'>Likes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center justify-end gap-4 md:hidden lg:flex'>
            <button
              onClick={() =>
                setViewMode(viewMode === 'card' ? 'table' : 'card')
              }
              className='rounded-full bg-primary p-2 text-white'
            >
              {viewMode === 'card' ? (
                <List className='h-5 w-5' />
              ) : (
                <Grid className='h-5 w-5' />
              )}
            </button>
            <button
              onClick={handleScrollLeft}
              disabled={isAtStart}
              className={`rounded-full p-2 ${
                isAtStart || viewMode === 'table'
                  ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                  : 'bg-primary text-white'
              }`}
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={handleScrollRight}
              disabled={isAtEnd}
              className={`rounded-full p-2 ${
                isAtEnd || viewMode === 'table'
                  ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                  : 'bg-primary text-white'
              }`}
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'card' ? (
        <div className='overflow-hidden'>
          <div
            ref={carouselRef}
            className='no-scrollbar flex gap-4 overflow-x-auto scroll-smooth'
          >
            {filteredNotes.map((note) => {
              const isLiked = liked[note.id];
              return (
                <div
                  key={note.id}
                  className='mb-3 w-full max-w-[400px] flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 shadow-md sm:mt-6 sm:h-[500px] sm:w-[600px]'
                >
                  {/* Top Section: Ratings */}
                  <div className='mb-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      {note.icon}
                      <span className='text-sm font-medium text-gray-700'>
                        {note.type}
                      </span>
                    </div>
                    <div className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-gray-700'>
                      <Star className='h-4 w-4 fill-yellow-500 text-yellow-500' />
                      <span className='text-sm font-medium'>
                        {note.ratings}
                      </span>
                    </div>
                  </div>

                  {/* Preview Section: always placeholder now */}
                  <div className='mb-3'>
                    <div className='flex h-[280px] w-full max-w-[365px] items-center justify-center rounded-lg bg-gray-100 lg:h-[330px]'>
                      <p className='text-sm italic text-gray-400'>
                        No preview available
                      </p>
                    </div>
                  </div>

                  {/* Note Name */}
                  <div className='mb-3'>
                    <p className='text-md truncate font-medium text-gray-800'>
                      {note.name}
                    </p>
                  </div>

                  {/* Bottom Section: time, feedbacks, likes */}
                  <div className='flex items-center gap-2'>
                    <span className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                      {note.uploadedTime}
                    </span>
                    <span className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                      <MessageCircle className='h-4 w-4' />
                      {note.feedbacks}
                    </span>
                    <button
                      onClick={() => toggleLike(note.id)}
                      className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                        isLiked
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <ThumbsUp
                        className={`h-4 w-4 transition-colors ${
                          isLiked ? 'text-green-700' : 'text-gray-700'
                        }`}
                      />
                      {note.likes + (isLiked ? 1 : 0)}
                    </button>
                  </div>
                </div>
              );
            })}
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
