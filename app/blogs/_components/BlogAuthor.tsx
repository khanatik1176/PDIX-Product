import Image from 'next/image';

const BlogAuthor = ({
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
          src={author.avatar}
          alt='Avatar'
          width={20}
          height={20}
          className='object-cover'
        />
      </div>
      <p
        className={`text-twelve font-medium ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'} `}
      >
        {author.name}
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
      {author.date}
    </p>
  </div>
);

export default BlogAuthor;
