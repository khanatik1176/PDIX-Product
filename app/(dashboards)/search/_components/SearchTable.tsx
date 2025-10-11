'use client';
import React, { useState } from 'react';
import { Download, Eye, FileText, MessageCircle } from 'lucide-react';
import { NotesTabListProps } from '@/types/Library.types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { formatDate } from '@/constants/globalFunctions';
import SearchModal from './SearchModal';

const PAGE_SIZE = 10;

const SearchTable: React.FC<NotesTabListProps> = ({
  notes,
  selectedSubjects,
}) => {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<any>(null);

  // Filter notes by selected subjects
  const filteredNotes = selectedSubjects.length
    ? notes.filter((n) => selectedSubjects.includes(n.subject))
    : notes;

  // Pagination logic
  const totalPages = Math.ceil(filteredNotes.length / PAGE_SIZE);
  const paginatedNotes = filteredNotes.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // Reset to first page when filter changes
  React.useEffect(() => {
    setPage(1);
  }, [selectedSubjects]);

  const handleNoteClick = (noteId: number) => {
    const note = notes.find((n) => n.id === noteId);
    setSelectedNote(note);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className='w-full rounded-lg border bg-white p-4 shadow'>
      <ul className='space-y-3'>
        {paginatedNotes.map((note) => (
          <li
            key={note.id}
            className='flex w-full cursor-pointer items-center justify-between rounded-md border bg-white p-2 hover:shadow'
            onClick={() => handleNoteClick(note.id)}
          >
            <div className='flex min-w-0 flex-1 items-center gap-x-4'>
              <div className='flex flex-col items-center gap-2 md:flex-row'>
                <FileText className='h-6 w-6 text-gray-600' />
                <span className='min-w-[80px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 py-0.5 text-center text-xs font-semibold text-black'>
                  {note.subject}
                </span>
              </div>
              <div className='min-w-0'>
                <div className='w-full max-w-[200px] truncate font-medium md:max-w-full'>
                  {note.name}
                </div>
                <div className='flex flex-col gap-2 text-xs text-gray-400 md:flex-row md:items-center'>
                  {formatDate(note.date)}
                  <div className='flex items-center gap-1'>
                    <MessageCircle className='h-4 w-4 text-gray-400' />
                    <span className='font-medium text-gray-600'>
                      {note.feedback ?? 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Views and Downloads side by side */}
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1'>
                <Eye className='h-4 w-4 text-secondary' />
                <span className='font-semibold tabular-nums text-gray-700'>
                  {note.views}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <Download className='h-4 w-4 text-secondary' />
                <span className='font-semibold tabular-nums text-gray-700'>
                  {note.downloads}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex w-full items-center justify-between'>
        {/* Row count on the left */}
        <span className='text-sm text-gray-500'>
          {paginatedNotes.length} of {filteredNotes.length} row(s) showing
        </span>
        {/* Pagination on the right */}
        <div>
          {totalPages > 1 && (
            <Pagination className='w-auto'>
              <PaginationContent className='flex justify-end'>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-disabled={page === 1}
                    className={
                      page === 1
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer'
                    }
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, idx) => (
                  <PaginationItem key={idx}>
                    <PaginationLink
                      isActive={page === idx + 1}
                      onClick={() => setPage(idx + 1)}
                    >
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-disabled={page === totalPages}
                    className={
                      page === totalPages
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer'
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
      <SearchModal
        open={modalOpen}
        onClose={handleCloseModal}
        note={selectedNote}
      />
    </div>
  );
};

export default SearchTable;
