import React from 'react';
import { List, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewModeToggleProps } from '@/types/Note.types';



const ViewModeToggle: React.FC<ViewModeToggleProps> = ({
  viewMode,
  setViewMode,
  handleScrollLeft,
  handleScrollRight,
  isAtStart,
  isAtEnd,
  showArrows = true,
}) => (
  <div className='flex items-center gap-4'>
    <button
      onClick={() => setViewMode(viewMode === 'card' ? 'table' : 'card')}
      className='rounded-full bg-primary p-2 text-white'
    >
      {viewMode === 'card' ? <List className='h-5 w-5' /> : <Grid className='h-5 w-5' />}
    </button>
    {showArrows && (
      <>
        <button
          onClick={handleScrollLeft}
          disabled={isAtStart || viewMode === 'table'}
          className={`rounded-full p-2 ${
            isAtStart || viewMode === 'table'
              ? 'cursor-not-allowed bg-gray-300 text-gray-500'
              : 'bg-primary text-white'
          }`}
        >
          <ChevronLeft className='h-5 w-5' />
        </button>
        <button
          onClick={handleScrollRight}
          disabled={isAtEnd || viewMode === 'table'}
          className={`rounded-full p-2 ${
            isAtEnd || viewMode === 'table'
              ? 'cursor-not-allowed bg-gray-300 text-gray-500'
              : 'bg-primary text-white'
          }`}
        >
          <ChevronRight className='h-5 w-5' />
        </button>
      </>
    )}
  </div>
);

export default ViewModeToggle;