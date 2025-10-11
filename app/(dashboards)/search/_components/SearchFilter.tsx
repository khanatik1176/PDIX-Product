'use client';
import { SearchFilterProps } from '@/types/Global.types';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, ArrowUp, ArrowDown } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'downloads', label: 'Most Downloads' },
  { value: 'views', label: 'Most Viewed' },
];

const SearchFilter: React.FC<SearchFilterProps> = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  const [hovered, setHovered] = useState<'asc' | 'desc' | null>(null);
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || 'Date';

  return (
    <div className="flex items-center gap-4">
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="min-w-[170px] relative pl-7">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-gray-600" />
          </span>
          <SelectValue>{currentLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <button
          className={`relative flex items-center justify-center h-8 w-8 rounded-full shadow transition-all
            ${sortOrder === 'asc' ? 'bg-[#CE7411] text-white scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}
          type="button"
          onClick={() => setSortOrder('asc')}
          onMouseEnter={() => setHovered('asc')}
          onMouseLeave={() => setHovered(null)}
        >
          <ArrowUp className="h-5 w-5" />
          {hovered === 'asc' && (
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              Asc
            </span>
          )}
        </button>
        <button
          className={`relative flex items-center justify-center h-8 w-8 rounded-full shadow transition-all
            ${sortOrder === 'desc' ? 'bg-[#CE7411] text-white scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}
          type="button"
          onClick={() => setSortOrder('desc')}
          onMouseEnter={() => setHovered('desc')}
          onMouseLeave={() => setHovered(null)}
        >
          <ArrowDown className="h-5 w-5" />
          {hovered === 'desc' && (
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              Desc
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;