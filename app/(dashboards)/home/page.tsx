'use client';
import BreadcrumbWithAvatar from '@/components/BreadCrumbiwthAvatar';
import PageHeader from '@/components/PageHeader';
import PageHeading from '@/components/pageHeading';
import { UserDetails } from '@/contexts/UserContext';
import React, { useState } from 'react';
import LibraryCard from './_components/LibraryCards';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LibraryTopicCard from './_components/LibraryTopicCard';
import NotesTabList from './_components/NotesTabList';
import SubjectFilter from './_components/SubjectFilter';
import {
  DUMMY_NOTES,
  SUBJECT_TOPIC_INFO,
  SUBJECTS,
} from '@/constants/DummyDataFactory';
import { useRouter } from 'next/navigation';

const NotesGallery = () => {
  const { userData } = UserDetails();

  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
  };
  const handleSubjectChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const selectedSubject = selectedSubjects[0];
  const topicInfo =
    selectedSubject && SUBJECT_TOPIC_INFO[selectedSubject]
      ? SUBJECT_TOPIC_INFO[selectedSubject]
      : {
          title: 'Welcome to Your Notes Hub',
          subtitle:
            'Select a subject to explore curated notes, or use the search to find exactly what you need.',
        };

  console.log(
    'User Data:',
    userData?.identities?.[0]?.identity_data?.full_name
  );

  return (
    <div>
      <PageHeader title='Home • Scribbbleer' />
      <div className='px-0 md:px-6 lg:px-9 xl:px-6'>
        <PageHeading
          title={`Welcome ${userData?.name}!`}
          subTitle='Explore your library of notes'
          isHome={true}
          className='pl-2 pt-3 xl:pt-6'
        />
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-4'>
          <LibraryCard title='Total Notes' value={120} />
          <LibraryCard title='Uploaded Today' value={8} />
          <LibraryCard title='Total Registered' value={350} />
          <LibraryCard title='Registered Today' value={3} />
        </div>
      </div>
      <div className='mb-3 mt-3 flex flex-col items-start px-4 md:px-10 lg:px-12 xl:px-10'>
        <LibraryTopicCard
          title={topicInfo.title}
          subtitle={topicInfo.subtitle}
        />
      </div>
      <div className='mb-4 mt-4 flex w-full items-center justify-center gap-2 px-4 sm:gap-6 md:mt-8 md:px-0'>
        <div className='relative w-full md:max-w-[300px] lg:max-w-[520px] xl:max-w-[800px]'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7e8086]' />
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Title, Topic Name, whatever comes in your mind!'
            className='w-full pl-10 placeholder:text-[#b2bac5]'
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button
          className='w-full max-w-[40px] bg-[#CE7411] sm:max-w-[128px]'
          onClick={handleSearch}
        >
          <Search className='h-4 w-4 sm:hidden' />
          <span className='hidden sm:inline'>Search</span>
        </Button>
      </div>
      <div className='flex w-full flex-col-reverse gap-6 px-4 py-6 md:px-6 lg:flex-row lg:px-9 xl:px-10'>
        {/* Left: NotesTabList */}
        <div className='w-full lg:w-2/3'>
          <NotesTabList
            notes={DUMMY_NOTES}
            selectedSubjects={selectedSubjects}
          />
        </div>
        {/* Right: SubjectFilter */}
        <div className='w-full lg:w-1/3'>
          <SubjectFilter
            subjects={SUBJECTS}
            selectedSubjects={selectedSubjects}
            onChange={handleSubjectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesGallery;
