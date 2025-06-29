import React from 'react';


type CaseStudiesTopic2Props = {
  icon?: React.ReactNode; // Icon component (optional)
  title: string; // Title of the topic
  description: string; // Description of the topic
  listItems: string[]; // List of bullet points
  isDarkModeActive?: boolean; // Flag for dark mode (optional)
};

const CaseStudiesTopic2: React.FC<CaseStudiesTopic2Props> = ({
  icon = '🤝',
  title,
  description,
  listItems,
  isDarkModeActive,
}) => {
  return (
    <div className='flex flex-col items-start pt-12 lg:pb-4'>
      <div className='flex items-center gap-2 pb-8'>
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
      <ul
        className={`list-disc pl-6 pt-1 text-[16px] font-normal ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
      >
        {listItems.map((item, index) => (
          <li key={index} className='pb-2'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudiesTopic2;
