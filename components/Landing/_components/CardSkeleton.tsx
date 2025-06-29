import { FC } from "react";

// Skeleton component for loading state
const CardSkeleton: FC<{ DarkModeActive?: boolean }> = ({
  DarkModeActive,
}) => (
  <div
    className={`mt-8 flex h-[500px] w-full flex-col items-center justify-center rounded-lg border border-[#87BFF2] border-opacity-50 shadow-lg ${
      DarkModeActive ? 'bg-black' : 'bg-white'
    } animate-pulse`}
  >
    <div className='flex w-full justify-center p-6'>
      <div className='h-[200px] w-[320px] rounded bg-gray-300 dark:bg-gray-700' />
    </div>
    <div className='w-full px-6'>
      <div
        className={`mb-4 h-6 w-2/3 rounded ${DarkModeActive ? 'bg-gray-700' : 'bg-gray-300'}`}
      />
      <div
        className={`mb-2 h-4 w-full rounded ${DarkModeActive ? 'bg-gray-700' : 'bg-gray-300'}`}
      />
      <div
        className={`mb-2 h-4 w-5/6 rounded ${DarkModeActive ? 'bg-gray-700' : 'bg-gray-300'}`}
      />
      <div
        className={`h-4 w-4/6 rounded ${DarkModeActive ? 'bg-gray-700' : 'bg-gray-300'}`}
      />
    </div>
  </div>
);

export default CardSkeleton;