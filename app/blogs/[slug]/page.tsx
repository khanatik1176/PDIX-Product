/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingNav from '@/components/Landing/LandingNav';
import React, { useContext, useState } from 'react';
import CustomContactArea from '@/components/CustomContactArea';
import BlogBanner from '../_components/BlogBanner';
import BlogTitle from '../_components/BlogTitle';
import BlogAuthor from '../_components/BlogAuthor';
import BlogTopSocialShare from '../_components/BlogTopSocialShare';
import BlogFooterSocials from '../_components/BlogFooterSocials';
import { ModeContext } from '@/contexts/ModeContext';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { GetBlogsBySlug } from '@/helpers/Blogs/BlogApi';
import { formatDate } from '@/constants/globalFunctions';
import { SingleBlogType } from '@/types/BlogTypes';
import Loader from '@/components/loader';

const BlogDetails = () => {
  const { isDarkModeActive, setIsDarkModeActive } = useContext(
    ModeContext
  ) as ModeContextType;

  const { slug } = useParams();

  const {
    data: singleBlog,
    isFetching: isingleBlogFetching,
    refetch: refetchsingleBlog,
  } = useQuery<SingleBlogType>({
    queryKey: ['caseStudies'],
    queryFn: () =>
      GetBlogsBySlug(
        typeof slug === 'string'
          ? slug
          : Array.isArray(slug)
            ? (slug[0] ?? '')
            : ''
      ),
    refetchOnWindowFocus: false,
  });

  const authorDetails = {
    name: singleBlog?.created_by?.full_name ?? '',
    date: formatDate(singleBlog?.published_at ?? ''),
    avatar:
      singleBlog?.created_by?.picture && singleBlog.created_by.picture !== ''
        ? singleBlog.created_by.picture
        : '/Images/DummyFIgure.svg',
  };

  // Copy Link state and handler
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  const socialLinks = [
    { icon: '/logo/facebook.svg', alt: 'Facebook', href: 'https://facebook.com' },
    { icon: '/logo/X .svg', alt: 'X', href: 'https://twitter.com' },
    {
      icon: null,
      alt: 'Copy Link',
      href: typeof window !== 'undefined' ? window.location.href : '',
      label: 'Copy Link',
      onClick: handleCopyLink,
      isCopy: true,
    },
  ];

  const FootersocialLinks = [
    {
      icon: '/logo/facebook.svg',
      alt: 'Facebook',
      href: 'https://facebook.com',
    },
    { icon: '/logo/X .svg', alt: 'X', href: 'https://twitter.com' },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkModeActive ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <LandingNav
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      />
      <div className='mx-auto w-full max-w-[1920px]'>
        {isingleBlogFetching ? (
          <Loader />
        ) : (
          <>
            {singleBlog?.thumbnail_url && (
              <BlogBanner images={singleBlog.thumbnail_url}/>
            )}
            <div className='px-6 lg:px-[150px] xl:px-[300px] 2xl:px-[500px]'>
              <BlogTitle title={singleBlog?.title ?? ''} />
              <div className='flex w-full items-center'>
                <div className='flex w-full flex-col gap-6 pb-12 pt-6 lg:flex-row lg:items-center lg:gap-[300px] lg:pb-16 xl:gap-[420px]'>
                  <BlogAuthor
                    author={authorDetails}
                    isDarkModeActive={isDarkModeActive}
                  />
                  <BlogTopSocialShare
                    links={socialLinks}
                    isDarkModeActive={isDarkModeActive}
                  />
                </div>
              </div>
              {/* Blog Content Rendered as HTML */}
              {singleBlog?.content && (
                <div
                  className={`prose prose-lg mx-auto max-w-none lg:my-8 ${
                    isDarkModeActive ? 'prose-invert' : ''
                  }`}
                  dangerouslySetInnerHTML={{ __html: singleBlog.content }}
                />
              )}
              <div>
                <BlogFooterSocials
                  socialLinks={FootersocialLinks}
                  isDarkModeActive={isDarkModeActive}
                />
              </div>
            </div>
            <div>
              <CustomContactArea isDarkModeActive={isDarkModeActive} />
            </div>
          </>
        )}
        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
};

export default BlogDetails;