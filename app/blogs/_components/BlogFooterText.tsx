import React from 'react';

type BlogFooterTextProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  isDarkModeActive?: boolean;
};

const BlogFooterText: React.FC<BlogFooterTextProps> = ({
  icon = '🗣️',
  title,
  description,
  isDarkModeActive,
}) => {
  return (
    <div className='flex flex-col items-start pt-12 lg:pb-8'>
      <div className='flex items-center gap-2 pb-4'>
        <span>{icon}</span>
        <p
          className={`text-[20px] font-semibold ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
        >
          {title}
        </p>
      </div>
      <p
        className={`text-[16px] font-normal${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'} `}
      >
        {description}
      </p>
    </div>
  );
};

export default BlogFooterText;
