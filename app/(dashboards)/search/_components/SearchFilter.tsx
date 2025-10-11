'use client';
import { SearchFilterProps } from '@/types/Global.types';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'downloads', label: 'Most Downloads' },
  { value: 'views', label: 'Most Viewed' },
  { value: 'popularity', label: 'Popularity' },
];

const SearchFilter: React.FC<SearchFilterProps> = ({
  sortBy,
  setSortBy,
}) => {
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || 'Popularity';

  return (
    <div className="flex items-center gap-2">
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
    </div>
  );
};

export default SearchFilter;