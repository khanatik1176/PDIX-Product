import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SocialLink = {
  icon: string; // Path to the icon
  alt: string; // Alt text for the icon
  href: string; // Link URL
};

type BlogFooterSocialsProps = {
  socialLinks: SocialLink[]; // Array of social links
  isDarkModeActive?: boolean; // Optional prop to indicate dark mode
};

const BlogFooterSocials: React.FC<BlogFooterSocialsProps> = ({
  socialLinks,
  isDarkModeActive,
}) => {
  return (
    <div className='flex items-center justify-end gap-2 pt-8'>
      <p
        className={`text-twelve font-medium ${
          isDarkModeActive ? 'text-textLight' : 'text-textSecondary'
        }`}
      >
        Share on
      </p>
      {socialLinks.map((link, index) => (
        <React.Fragment key={index}>
          <Link href={link.href} target="_blank"  rel="noopener noreferrer">
            <Image
              src={
                isDarkModeActive && link.alt === 'X'
                  ? '/logo/X-Dark.svg'
                  : link.icon
              }
              alt={link.alt}
              width={20}
              height={20}
              className='object-cover'
            />
          </Link>
          {index < socialLinks.length - 1 && (
            <span
              className={`${
                isDarkModeActive ? 'text-textLight' : 'text-textSecondary'
              }`}
            >
              |
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogFooterSocials;
