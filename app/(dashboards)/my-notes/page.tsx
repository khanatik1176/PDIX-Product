'use client';
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import EmptyMyNotesVIew from './_components/EmptyMyNotesVIew';
import MyNotesToolbar from './_components/MyNotesToolbar';
import MyNotesCard from './_components/MyNotesCard';
import { getAllNotes } from '@/helpers/Notes/NotesApi';
import { useQuery } from '@tanstack/react-query';
import Preview1 from '../../../public/Images/Preview-1.svg';
import CustomLoader from '@/components/CustomLoader';
import { UserDetails } from '@/contexts/UserContext';
import { GenericTable } from '@/components/GenericTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';
import ViewToggle from '@/components/ViewToggle';
import { MyNoteCardTypes } from '@/types/MyNotes.types';

const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('last-added');
  const [modalOpen, setModalOpen] = useState(false);
  const [viewType, setViewType] = useState<'table' | 'card'>('table');
  const [currentPage, setCurrentPage] = useState(1);

  const { userData } = UserDetails();

  const handleUpload = () => {
    setModalOpen(true);
    console.log('Upload Notes clicked');
  };

  const { data: notes = [], isLoading: isNotesLoading, refetch: refetchNotes } = useQuery({
    queryKey: ['notes'],
    queryFn: getAllNotes,
  });

  // Table config
  const pageSize = 10;
  const totalCountAndLimit = { totalCount: notes.length, size: pageSize };

  const notesColumns: ColumnDef<any>[] = [
    {
      accessorKey: 'title',
      header: () => (
        <div className='font-medium text-inputFooterColor'>Title</div>
      ),
      cell: ({ row }: { row: any }) => (
        <div className='max-w-[200px] truncate font-medium'>
          {row.getValue('title')}
        </div>
      ),
    },
    {
      accessorKey: 'uploadDate',
      header: () => (
        <div className='font-medium text-inputFooterColor'>Upload Date</div>
      ),
      cell: ({ row }: { row: any }) => (
        <div>
          {row.getValue('uploadDate')
            ? new Date(row.getValue('uploadDate')).toLocaleDateString()
            : '-'}
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: () => (
        <div className='font-medium text-inputFooterColor'>Status</div>
      ),
      cell: ({ row }: { row: any }) => (
        <Badge variant='outline'>{row.getValue('status')}</Badge>
      ),
    },
    {
      accessorKey: 'viewCount',
      header: () => (
        <div className='font-medium text-inputFooterColor'>View Count</div>
      ),
      cell: ({ row }: { row: any }) => <div>{row.getValue('viewCount')}</div>,
    },
    {
      accessorKey: 'rating',
      header: () => (
        <div className='font-medium text-inputFooterColor'>Rating</div>
      ),
      cell: ({ row }: { row: any }) => <div>{row.getValue('rating')}</div>,
    },
    {
      id: 'actions',
      header: () => (
        <div className='font-medium text-inputFooterColor'>Actions</div>
      ),
      cell: ({ row }: { row: any }) => (
        <Button size='sm' variant='outline'>
          View
        </Button>
      ),
      enableHiding: false,
    },
  ];

  return (
    <div>
      <PageHeader title='My Notes • Scribbbleer' />
      <BreadcrumbWithAvatar
        initialData='My Notes'
        initialLink='/my-notes'
        userData={userData}
      />
      <div className='px-3 lg:px-6'>
        <PageHeading title='My notes' className='pl-2 pt-3' />
        <div>
          <MyNotesToolbar
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            onUpload={handleUpload}
            open={open}
            setOpen={setOpen}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        </div>
        {/* Toggle Button */}
        <ViewToggle viewType={viewType} setViewType={setViewType} />
        {isNotesLoading ? (
          <div className='h-[600px]'>
            <CustomLoader />
          </div>
        ) : notes.length === 0 ? (
          <EmptyMyNotesVIew setModalOpen={setModalOpen} modalOpen={modalOpen} refetchNotes={refetchNotes} />
        ) : viewType === 'card' ? (
          <div className='mt-8 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {notes.map(
              (note: MyNoteCardTypes) => (
                <MyNotesCard
                  key={note.id}
                  title={note.title}
                  imageSrc={note.imageSrc ?? Preview1}
                  iconType={
                    note.iconType === 'file' || note.iconType === 'link'
                      ? note.iconType
                      : 'file'
                  }
                  id={note.id}
                />
              )
            )}
          </div>
        ) : (
          <div className='mt-8 overflow-x-auto'>
            <GenericTable
              columns={notesColumns}
              data={notes as any[]}
              totalCountAndLimit={totalCountAndLimit}
              currentPage={currentPage}
              loading={isNotesLoading}
              headerClassNames={{
                title: 'min-w-[200px] w-[200px]',
                uploadDate: 'min-w-[140px] w-[140px]',
                status: 'min-w-[120px] w-[120px]',
                viewCount: 'min-w-[120px] w-[120px]',
                rating: 'min-w-[100px] w-[100px]',
                actions: 'min-w-[100px] w-[100px] text-center',
              }}
              cellClassNames={{
                title: 'min-w-[200px] w-[200px] truncate',
                uploadDate: 'min-w-[140px] w-[140px]',
                status: 'min-w-[120px] w-[120px]',
                viewCount: 'min-w-[120px] w-[120px] pl-4',
                rating: 'min-w-[100px] w-[100px] pl-4',
                actions: 'min-w-[100px] w-[100px] text-center',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
