import Image from 'next/image';
import { Link2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { toast } from '@/hooks/use-toast';

const BlogTopSocialShare = ({
  links,
  isDarkModeActive,
}: {
  links: { icon: string | null; alt: string; href: string; label?: string; onClick?: (e: React.MouseEvent) => void; isCopy?: boolean }[];
  isDarkModeActive: boolean;
}) => {
  // Handler to show toast when copy is done
  const handleCopyClick = (link: any, e: React.MouseEvent) => {
    if (link.onClick) {
      link.onClick(e);
      // Show toast after copy
      setTimeout(() => {
        toast({
          title: 'Link Copied Successfully',
        });
      }, 100); // Small delay to ensure copy is done
    }
  };

  return (
    <div className="flex items-center gap-2">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link.icon ? (
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="flex-shrink-0 flex items-center">
                <Image
                  src={
                    isDarkModeActive && link.alt === 'X'
                      ? '/logo/X-Dark.svg'
                      : link.icon
                  }
                  alt={link.alt}
                  width={20}
                  height={20}
                  className="object-cover flex-shrink-0"
                />
              </span>
            </Link>
          ) : link.isCopy ? (
            <button
              type="button"
              onClick={e => handleCopyClick(link, e)}
              className={`flex items-center gap-2 text-twelve font-medium flex-shrink-0 border-0 bg-transparent p-0 ${
                isDarkModeActive ? 'text-textLight' : 'text-textSecondary'
              }`}
              style={{ cursor: 'pointer' }}
            >
              <Link2 size={20} />
              {link.label}
            </button>
          ) : (
            <Link href={link.href}>
              <span
                className={`flex items-center gap-2 text-twelve font-medium flex-shrink-0 ${
                  isDarkModeActive ? 'text-textLight' : 'text-textSecondary'
                }`}
              >
                <Link2 size={20} />
                {link.label}
              </span>
            </Link>
          )}
          {index < links.length - 1 && <span className="flex-shrink-0">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogTopSocialShare;