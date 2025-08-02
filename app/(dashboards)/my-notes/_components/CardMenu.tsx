import React, { useRef, useEffect, FC } from 'react';
import {
  SquarePen,
  PencilLine,
  Download,
  Share2,
  Info,
  Trash2,
} from 'lucide-react';
import { CardMenuProps } from '@/types/MyNotesType';

const CardMenu: FC<CardMenuProps> = ({
  open,
  onClose,
  onRename,
  onEdit,
  onDownload,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className='absolute -left-[110px] z-10 mt-2 w-[150px] rounded border border-gray-200 bg-white shadow-lg 2xl:-left-2 2xl:w-[216px]'
    >
      <button
        className='flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
        onClick={onRename}
      >
        <SquarePen className='h-4 w-4' />
        Rename file
      </button>
      <button
        className='flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
        onClick={onEdit}
      >
        <PencilLine className='h-4 w-4' />
        Edit Note
      </button>
      <button
        className='flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
        onClick={onDownload}
      >
        <Download className='h-4 w-4' />
        Download
      </button>
      <button className='flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'>
        <Share2 className='h-4 w-4' />
        Share
      </button>
      <hr className='my-1' />
      <button className='flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'>
        <Info className='h-4 w-4' />
        Details
      </button>
      <button className='flex w-full items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-100'>
        <Trash2 className='h-4 w-4 text-red-500' />
        Remove
      </button>
    </div>
  );
};

export default CardMenu;
