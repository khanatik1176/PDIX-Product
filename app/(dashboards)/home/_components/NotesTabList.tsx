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
import NoteModal from './NoteModal';

const TABS = ['Most Viewed', 'Most Downloaded'];
const PAGE_SIZE = 10;

const NotesTabList: React.FC<NotesTabListProps> = ({
  notes,
  selectedSubjects,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<any>(null);
  // Filter notes by selected subjects
  const filteredNotes = selectedSubjects.length
    ? notes.filter((n) => selectedSubjects.includes(n.subject))
    : notes;

  // Sort notes based on tab
  const sortedNotes =
    activeTab === 0
      ? [...filteredNotes].sort((a, b) => b.views - a.views)
      : [...filteredNotes].sort((a, b) => b.downloads - a.downloads);

  // Pagination logic
  const totalPages = Math.ceil(sortedNotes.length / PAGE_SIZE);
  const paginatedNotes = sortedNotes.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // Reset to first page when tab or filter changes
  React.useEffect(() => {
    setPage(1);
  }, [activeTab, selectedSubjects]);

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
      <div className='mb-4 flex border-b'>
        {TABS.map((tab, idx) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === idx
                ? 'border-b-2 border-[#CE7411] text-[#CE7411]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
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
                <span
                  className={`min-w-[80px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 py-0.5 text-center text-xs font-semibold text-black`}
                >
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
            <div className='flex items-center gap-1'>
              {activeTab === 0 ? (
                <Eye className='h-4 w-4 text-secondary' />
              ) : (
                <Download className='h-4 w-4 text-secondary' />
              )}
              <span className='text-right font-semibold tabular-nums text-gray-700 md:w-10'>
                {activeTab === 0 ? note.views : note.downloads}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination className='mt-4'>
          <PaginationContent>
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
      <NoteModal
        open={modalOpen}
        onClose={handleCloseModal}
        note={selectedNote}
      />
    </div>
  );
};

export default NotesTabList;
