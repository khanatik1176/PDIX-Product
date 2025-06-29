import React, { FC } from 'react';

type CaseStudiesFooterTextProps = {
  isDarkModeActive?: boolean; // Flag for dark mode (optional)
};

const CaseStudiesFooterText: FC<CaseStudiesFooterTextProps> = ({
  isDarkModeActive,
}) => {
  return (
    <div className='pb-4 pt-8'>
      <p
        className={`text-[20px] font-semibold ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
      >
        Start working smarter, not harder. Try collaborative editing today and
        experience the power of real-time teamwork.
      </p>
    </div>
  );
};

export default CaseStudiesFooterText;
