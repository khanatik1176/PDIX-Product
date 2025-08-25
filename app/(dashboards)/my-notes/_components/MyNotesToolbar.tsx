import React, { useState, useRef, useEffect, FC } from 'react';
import { ChevronDown, ChevronUp, Plus, ListFilter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MyNotesToolbarProps } from '@/types/MyNotes.types';
import UploadNoteModal from './UploadNoteModal';

const MyNotesToolbar: FC<MyNotesToolbarProps> = ({
  filterValue,
  onFilterChange,
  onUpload,
  open,
  setOpen,
  setModalOpen,
  modalOpen,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const mobileFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileFilterOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileFilterRef.current &&
        !mobileFilterRef.current.contains(event.target as Node)
      ) {
        setMobileFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileFilterOpen]);

  return (
    <div className="w-full pt-6">
      {/* Desktop/Tablet */}
      <div className="hidden sm:flex w-full items-center justify-between gap-4">
        <Input placeholder="Search" className="w-full max-w-md" />
        <div className="flex items-center gap-4">
          <div className="relative">
            <Select open={open} onOpenChange={setOpen} value={filterValue} onValueChange={onFilterChange}>
              <SelectTrigger className="flex w-[160px] items-center justify-between bg-[#F1F5F9]">
                <SelectValue placeholder="Filter" />
                {open ? (
                  <ChevronUp className="h-4 w-4 text-gray-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                )}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-added">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                  Last added
                </SelectItem>
                <SelectItem value="last-updated">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                  Last updated
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="flex h-10 w-full max-w-[128px] items-center justify-center gap-2"
            onClick={onUpload}
          >
            Upload Notes
            <Plus size={16} />
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden flex-col w-full gap-3">
        <div className="flex w-full gap-2">
          <Input placeholder="Search" className="w-full" />
          <div className="relative" ref={mobileFilterRef}>
            <Button
              variant="outline"
              className="p-2"
              onClick={() => setMobileFilterOpen((prev) => !prev)}
              aria-label="Filter"
            >
              <ListFilter className="h-5 w-5" />
            </Button>
            {mobileFilterOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-10">
                <button
                  className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                    filterValue === 'last-added' ? 'font-semibold' : ''
                  }`}
                  onClick={() => {
                    onFilterChange('last-added');
                    setMobileFilterOpen(false);
                  }}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                  Last added
                </button>
                <button
                  className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                    filterValue === 'last-updated' ? 'font-semibold' : ''
                  }`}
                  onClick={() => {
                    onFilterChange('last-updated');
                    setMobileFilterOpen(false);
                  }}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                  Last updated
                </button>
              </div>
            )}
          </div>
        </div>
        <Button
          className="flex h-10 w-full items-center justify-center gap-2"
          onClick={onUpload}
        >
          Upload Notes
          <Plus size={16} />
        </Button>
      </div>
      <UploadNoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default MyNotesToolbar;