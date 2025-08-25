import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookX, Plus } from 'lucide-react';
import UploadNoteModal from './UploadNoteModal';
import { EmptyNoteTypes } from '@/types/MyNotes.types';

const EmptyMyNotesVIew: React.FC<EmptyNoteTypes> = ({ setModalOpen, modalOpen }) => {
  return (
    <div className='flex h-[700px] flex-col items-center justify-center px-6'>
      <span>
        <BookX size={32} strokeWidth={1} />
      </span>
      <p className='pt-2 text-xl font-medium'>No notes uploaded yet</p>
      <p className='pt-2 text-sm font-normal text-textSecondary lg:text-xl'>
        Start uploading your notes to see them listed here.
      </p>
      <Button
        className='mt-4 h-full max-h-[42px] w-full max-w-[140px] cursor-pointer rounded-lg'
        onClick={() => setModalOpen(true)}
      >
        Upload notes
        <span>
          <Plus size={16} />
        </span>
      </Button>
      <UploadNoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default EmptyMyNotesVIew;