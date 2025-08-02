// app/(dashboards)/my-notes/_components/RenameFileModal.tsx
import React, { FC } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RenameFileModalProps } from '@/types/MyNotesType';

const RenameFileModal: FC<RenameFileModalProps> = ({
  open,
  onClose,
  filename,
  onFilenameChange,
  onUpdate,
}) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      {/* Modal container */}
      <div className='fixed bottom-0 mx-2 flex w-full max-w-full flex-col items-start gap-4 rounded-lg rounded-t-2xl bg-white p-6 shadow-lg sm:fixed sm:inset-0 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:mx-0 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg sm:p-6'>
        <h2 className='mb-1 text-2xl font-semibold pt-2'>Rename File</h2>
        <label className='mb-0 flex items-center gap-1 text-sm font-medium'>
          File name <span className='text-red-500'>*</span>
        </label>
        <Input
          value={filename}
          onChange={(e) => onFilenameChange(e.target.value)}
          placeholder='Enter new file name'
          className='mb-1 h-10'
        />
        <Button className='w-full h-10' onClick={onUpdate}>
          Update
        </Button>
        <Button variant='outline' className='w-full h-10' onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default RenameFileModal;
