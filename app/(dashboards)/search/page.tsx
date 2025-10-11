import { Suspense } from 'react';
import SearchPageContent from './_components/SearchPageConent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}