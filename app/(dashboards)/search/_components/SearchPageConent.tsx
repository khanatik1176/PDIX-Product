'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { DUMMY_NOTES } from '@/constants/DummyDataFactory';
import SearchFilter from './SearchFilter';
import SearchTable from './SearchTable';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import { UserDetails } from '@/contexts/UserContext';
import SearchHeaderComponent from './SearchHeaderComponent';

const getSortedNotes = (notes: any[], sortBy: string, sortOrder: any) => {
  let sorted = [...notes];
  switch (sortBy) {
    case 'downloads':
      sorted.sort((a, b) => b.downloads - a.downloads);
      break;
    case 'views':
      sorted.sort((a, b) => b.views - a.views);
      break;
    case 'popularity':
      sorted.sort((a, b) => b.likes - a.likes);
      break;
    case 'date':
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
    default:
      break;
  }
  if (sortOrder === 'asc') sorted.reverse();
  return sorted;
};

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('query') || '';
  const [searchText, setSearchText] = useState(initialQuery);
  const { userData } = UserDetails();

  // Filter panel state
  const [selectedTopic, setSelectedTopic] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Get unique topics from notes
  const topics = useMemo(
    () => Array.from(new Set(DUMMY_NOTES.map((n) => n.subject))),
    []
  );

  // Filter notes by name or subject only
  const filteredNotes = useMemo(() => {
    let notes = DUMMY_NOTES.filter(
      (note) =>
        note.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        note.subject?.toLowerCase().includes(searchText.toLowerCase())
    );
    if (selectedTopic) {
      notes = notes.filter((note) => note.subject === selectedTopic);
    }
    return getSortedNotes(notes, sortBy, sortOrder);
  }, [searchText, selectedTopic, sortBy, sortOrder]);

  const handleSearch = () => {
    router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
  };

  return (
    <div className='mt-6 w-full px-4 md:px-6 xl:px-10'>
      {/* Top: Search and Filter side by side */}
      <SearchHeaderComponent
        title='Search Results'
        userData={userData}
      />
      <div className='mb-4 flex w-full flex-col gap-4 md:flex-row md:items-center'>
        {/* Search Bar */}
        <div className='flex flex-1 items-center gap-2'>
          <div className='relative w-full max-w-[800px]'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7e8086]' />
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder='Title, Subject, whatever comes in your mind!'
              className='w-full pl-10 placeholder:text-[#b2bac5]'
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button
            className='max-w-[40px] bg-[#CE7411] sm:max-w-[128px]'
            onClick={handleSearch}
          >
            <Search className='h-4 w-4 sm:hidden' />
            <span className='hidden sm:inline'>Search</span>
          </Button>
        </div>
        {/* Filter */}
        <div className='w-full flex-shrink-0 md:w-auto'>
          <SearchFilter
            topics={topics}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            sortBy={sortBy}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>
      {/* Table: Full width */}
      <div className='w-full'>
        <SearchTable
          notes={filteredNotes}
          selectedSubjects={selectedTopic ? [selectedTopic] : []}
        />
      </div>
    </div>
  );
};

export default SearchPageContent;
