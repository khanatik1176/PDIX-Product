'use client';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Bookmark } from 'lucide-react';
import { GenericTable } from '@/components/GenericTable';
import { CommunityNote } from '@/types/CommunityTypes';
import { tableData } from '@/utils/TempData/CommunityData';
import { Badge } from '@/components/ui/badge';

const headerClassNames = {
  topic: 'min-w-[160px] pl-4 text-left',
  subject: 'min-w-[100px] pl-4 text-left',
  classYear: 'pl-4 text-left',
  totalNotes: 'pl-4 text-left',
  lastNoteAdded: 'pl-4 text-left',
  bookmark: 'text-center w-[80px]',
};

const cellClassNames = {
  topic: 'pl-4 text-left font-medium',
  subject: 'pl-4 text-left',
  classYear: 'pl-4 text-left',
  totalNotes: 'pl-4 text-left',
  lastNoteAdded: 'pl-4 text-left',
  bookmark: 'flex justify-center text-center',
};

export const CommunityTable: React.FC<{
  currentPage: number;
  loading?: boolean;
}> = ({ currentPage, loading = false }) => {
  const columns: ColumnDef<CommunityNote>[] = [
    {
      accessorKey: 'topic',
      header: () => <div className='font-bold'>Topic</div>,
      cell: ({ row }) => (
        <div className='font-medium'>{row.getValue('topic')}</div>
      ),
    },
    {
      accessorKey: 'subject',
      header: () => <div className='font-bold'>Subject</div>,
      cell: ({ row }) => <div>{row.getValue('subject')}</div>,
    },
    {
      accessorKey: 'classYear',
      header: () => <div className='font-bold'>Class/Year</div>,
      cell: ({ row }) => <div>{row.getValue('classYear')}</div>,
    },
    {
      accessorKey: 'totalNotes',
      header: () => <div className='font-bold'>Total notes</div>,
      cell: ({ row }) => <div>{row.getValue('totalNotes')}</div>,
    },
    {
      accessorKey: 'lastNoteAdded',
      header: () => <div className='font-bold'>Last note added</div>,
      cell: ({ row }) => (
        <Badge variant='secondary' className='text-xs font-medium bg-white text-black border border-lightborderColor'>
          {row.getValue('lastNoteAdded')}
        </Badge>
      ),
    },
    {
      id: 'bookmark',
      header: () => <div className='text-center font-bold'></div>,
      cell: () => (
        <div className='flex justify-center'>
          <Bookmark strokeWidth={1} className='h-5 w-5 text-black' />
        </div>
      ),
      enableHiding: false,
    },
  ];

  const pageSize = 10;
  const totalCountAndLimit = { totalCount: tableData.length, size: pageSize };
  return (
    <GenericTable
      columns={columns}
      data={tableData}
      totalCountAndLimit={totalCountAndLimit}
      currentPage={currentPage}
      loading={loading}
      headerClassNames={headerClassNames}
      cellClassNames={cellClassNames}
    />
  );
};

export default CommunityTable;
