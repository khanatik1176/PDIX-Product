import React, { useRef, useEffect } from 'react';
import {
  SquarePen,
  PencilLine,
  Download,
  Share2,
  Info,
  Trash2,
} from 'lucide-react';
import { CardMenuProps } from '@/types/MyNotesType';


const CardMenu: React.FC<CardMenuProps> = ({ open, onClose }) => {
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
    <div ref={menuRef} className="absolute -left-2 mt-2 w-[216px] bg-white border border-gray-200 rounded shadow-lg z-10">
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2">
        <SquarePen className="h-4 w-4" />
        Rename file
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2">
        <PencilLine className="h-4 w-4" />
        Edit Note
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2">
        <Download className="h-4 w-4" />
        Download
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2">
        <Share2 className="h-4 w-4" />
        Share
      </button>
      <hr className="my-1" />
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2">
        <Info className="h-4 w-4" />
        Details
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 gap-2 text-red-500">
        <Trash2 className="h-4 w-4 text-red-500" />
        Remove
      </button>
    </div>
  );
};

export default CardMenu;