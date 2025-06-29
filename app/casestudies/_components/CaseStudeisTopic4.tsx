import React from 'react';


type CaseStudiesTopic4Props = {
  icon?: React.ReactNode; // Icon component (optional)
  title: string; // Title of the topic
  description: string; // Description of the topic
  isDarkModeActive?: boolean; // Flag for dark mode (optional)
};

const CaseStudiesTopic4: React.FC<CaseStudiesTopic4Props> = ({
  icon = '🔐',
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
        className={`text-[16px] font-normal ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CaseStudiesTopic4;
