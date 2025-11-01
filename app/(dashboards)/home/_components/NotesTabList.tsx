'use client';
import React, { useEffect, useState } from 'react';
import { NotesTabListProps } from '@/types/Library.types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import NoteModal from './NoteModal';

import { fetchNotesByStatus } from '@/helpers/Home/HomeApi';
import { useQuery } from '@tanstack/react-query';
import NotesLoadingSkeleton from './NotesLoadingSkeleton';
import NotesListItem from './NotesList';

const TABS = ['Most Viewed', 'Most Downloaded'];
const PAGE_SIZE = 10;

const NotesTabList: React.FC<NotesTabListProps> = ({ notes, selectedSubjects }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<any>(null);

  // determine sort key for server
  const sortKey = activeTab === 0 ? 'most_viewed' : 'most_downloaded';
  const selectedSubjectId = selectedSubjects?.[0];

  // fetch only server-sorted data for the active tab + selected subject
  const {
    data: rawNotesByStatus,
    isLoading: isNotesLoading,
    isFetching,
  } = useQuery({
    queryKey: ['notesByStatus', sortKey, selectedSubjectId],
    queryFn: () => fetchNotesByStatus(sortKey, selectedSubjectId),
    refetchOnWindowFocus: false,
  });

  const notesByStatus: any[] = Array.isArray(rawNotesByStatus)
    ? rawNotesByStatus
    : Array.isArray(rawNotesByStatus?.data)
    ? rawNotesByStatus.data
    : Array.isArray(rawNotesByStatus?.result)
    ? rawNotesByStatus.result
    : [];

  // use only server data (server is expected to honor the subject filter)
  const sourceNotes = notesByStatus;

  const totalPages = Math.max(1, Math.ceil(sourceNotes.length / PAGE_SIZE));
  const paginatedNotes = sourceNotes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // reset to first page when tab or selected subject changes
  useEffect(() => {
    setPage(1);
  }, [activeTab, selectedSubjectId]);

  const handleNoteClick = (noteId: string | number) => {
    const note =
      sourceNotes.find((n: any) => n.noteId === noteId || n.id === noteId) ||
      (Array.isArray(notes) ? notes.find((n: any) => n.noteId === noteId || n.id === noteId) : undefined);
    setSelectedNote(note);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedNote(null);
  };

  const loading = isNotesLoading || isFetching;

  return (
    <div className="w-full rounded-lg border bg-white p-4 shadow">
      <div className="mb-4 flex border-b">
        {TABS.map((tab, idx) => (
          <button
            key={tab}
            type="button"
            className={`px-4 py-2 font-semibold ${activeTab === idx ? 'border-b-2 border-[#CE7411] text-[#CE7411]' : 'text-gray-500'}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <NotesLoadingSkeleton />
      ) : (
        <ul className="space-y-3">
          {paginatedNotes.map((note: any) => (
            <NotesListItem key={note.noteId ?? note.id} note={note} activeTab={activeTab} onClick={handleNoteClick} />
          ))}
        </ul>
      )}

      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-sm text-gray-500">
          {loading ? 0 : paginatedNotes.length} of {sourceNotes.length} row(s) showing
        </span>

        <div>
          {!loading && sourceNotes.length > PAGE_SIZE && (
            <Pagination className="w-auto">
              <PaginationContent className="flex justify-end">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-disabled={page === 1}
                    className={page === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, idx) => (
                  <PaginationItem key={idx}>
                    <PaginationLink isActive={page === idx + 1} onClick={() => setPage(idx + 1)}>
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-disabled={page === totalPages}
                    className={page === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>

      <NoteModal open={modalOpen} onClose={handleCloseModal} note={selectedNote} />
    </div>
  );
};

export default NotesTabList;