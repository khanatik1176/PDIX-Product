import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';
import { NoteFiltersProps } from '@/types/Note.types';



const NoteFilters: React.FC<NoteFiltersProps> = ({
  filterType,
  setFilterType,
  filterSort,
  setFilterSort,
}) => (
  <div className='flex w-full gap-4 md:flex-row md:items-center'>
    <Select value={filterType} onValueChange={setFilterType}>
      <SelectTrigger className='flex w-48 items-center justify-between'>
        <SelectValue placeholder='Filter by Type' />
        <ChevronDown className='h-4 w-4 text-gray-500' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>All</SelectItem>
        <SelectItem value='PDF'>PDF</SelectItem>
        <SelectItem value='DOC'>DOC</SelectItem>
      </SelectContent>
    </Select>
    <Select value={filterSort} onValueChange={setFilterSort}>
      <SelectTrigger className='flex w-48 items-center justify-between'>
        <SelectValue placeholder='Sort by' />
        <ChevronDown className='h-4 w-4 text-gray-500' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='uploaded'>Uploaded</SelectItem>
        <SelectItem value='downloads'>Feedbacks</SelectItem>
        <SelectItem value='upvotes'>Likes</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default NoteFilters;