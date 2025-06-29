import Image from 'next/image';

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  // Get parts
  const day = date.toLocaleString('en-GB', { day: '2-digit' });
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.toLocaleString('en-GB', { year: 'numeric' });
  return `${day} ${month}, ${year}`;
};

const CaseStudiesAuthor = ({
  author,
  isDarkModeActive,
}: {
  author: { name: string; date: string; avatar: string };
  isDarkModeActive: boolean;
}) => (
  <div className='flex items-center justify-between gap-2 lg:justify-start'>
    <div className='flex items-center gap-2 flex-shrink-0'>
      <div className='h-5 w-5 overflow-hidden rounded-full bg-gray-300'>
        <Image
          src={author?.avatar}
          alt='Avatar'
          width={20}
          height={20}
          className='object-cover'
        />
      </div>
      <p
        className={`w-full text-twelve font-medium ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'} `}
      >
        {author?.name}
      </p>
    </div>
    <span
      className={`hidden lg:block ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
    >
      |
    </span>
    <p
      className={`text-twelve font-medium ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'} `}
    >
      {formatDate(author?.date)}
    </p>
  </div>
);

export default CaseStudiesAuthor;
