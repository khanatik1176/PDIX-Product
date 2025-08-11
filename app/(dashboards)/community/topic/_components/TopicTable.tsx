'use client';
import React, { FC } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { GenericTable } from '@/components/GenericTable';
import { Badge } from '@/components/ui/badge';
import { topicTableData } from '@/utils/TempData/CommunityData';


const headerClassNames = {
  fileName: 'min-w-[180px] pl-4 text-left',
  rating: 'min-w-[100px] pl-4 text-left',
  feedbacks: 'min-w-[100px] pl-4 text-left',
  uploadedBy: 'min-w-[120px] pl-4 text-left',
  uploadDate: 'min-w-[120px] pl-4 text-left',
};

const cellClassNames = {
  fileName: 'pl-4 text-left font-medium',
  rating: 'pl-4 text-left',
  feedbacks: 'pl-4 text-left',
  uploadedBy: 'pl-4 text-left',
  uploadDate: 'pl-4 text-left',
};

const TopicTable: FC<{ currentPage: number; loading?: boolean, handleViewFile: () => void }> = ({
  currentPage,
  loading = false,
  handleViewFile
}) => {


  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'fileName',
      header: () => <div className="font-medium text-inputFooterColor">File name</div>,
      cell: ({ row }) => <div className="font-medium text-inputFooterColor cursor-pointer" onClick={handleViewFile}>{row.getValue('fileName')}</div>,
    },
    {
      accessorKey: 'rating',
      header: () => (
        <div className="font-medium flex items-center gap-1 text-inputFooterColor">
          Rating
          <ArrowUpDown className="h-4 w-4 text-inputFooterColor cursor-pointer" />
        </div>
      ),
      cell: ({ row }) => (
        <div>{row.getValue('rating')}</div>
      ),
    },
    {
      accessorKey: 'feedbacks',
      header: () => (
        <div className="font-medium flex items-center gap-1 text-inputFooterColor">
          Feedbacks
          <ArrowUpDown className="h-4 w-4 text-inputFooterColor cursor-pointer" />
        </div>
      ),
      cell: ({ row }) => (
        <div>{row.getValue('feedbacks')}</div>
      ),
    },
    {
      accessorKey: 'uploadedBy',
      header: () => <div className="font-medium text-inputFooterColor">Uploaded by</div>,
      cell: ({ row }) => <div>{row.getValue('uploadedBy')}</div>,
    },
    {
      accessorKey: 'uploadDate',
      header: () => (
        <div className="font-medium flex items-center gap-1 text-inputFooterColor">
          Upload date
          <ArrowUpDown className="h-4 w-4 text-inputFooterColor cursor-pointer" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="font-medium">
          {row.getValue('uploadDate')}
        </div>
      ),
    },
  ];

  const pageSize = 10;
  const totalCountAndLimit = { totalCount: topicTableData.length, size: pageSize };

  return (
    <GenericTable
      columns={columns}
      data={topicTableData}
      totalCountAndLimit={totalCountAndLimit}
      currentPage={currentPage}
      loading={loading}
      headerClassNames={headerClassNames}
      cellClassNames={cellClassNames}
    />
  );
};

export default TopicTable;