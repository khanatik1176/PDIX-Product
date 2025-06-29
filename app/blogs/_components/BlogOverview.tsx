import React, { FC } from 'react';

type BlogOverviewProps = {
  header?: string;
  description?: string;
  isDarkModeActive?: boolean;
};

const BlogOverview: FC<BlogOverviewProps> = ({
  header,
  description,
  isDarkModeActive,
}) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <p
        className={`text-base font-normal ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'} `}
      >
        {header}
      </p>
      <p
        className={`text-base font-normal ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
      >
        {description}
      </p>
    </div>
  );
};

export default BlogOverview;
