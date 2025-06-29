'use client';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import BlogCard from './_components/BlogCard';
import { LandingGeneralProps, Blogs } from '@/types/LandingTypes';
import { useQuery } from '@tanstack/react-query';
import { GetBlogs} from '@/helpers/Landing/LandingApi';
import Link from 'next/link';
import Productivity from '@/public/Images/productivityBlog.svg';
import CardSkeleton from './_components/CardSkeleton';

const LandingBlogSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const { data: blogs, isFetching: isBlogsFetching } = useQuery<Blogs[]>({
    queryKey: ['blogs'],
    queryFn: () => GetBlogs(),
    refetchOnWindowFocus: false,
  });

  console.log('blogs', blogs);
  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='flex flex-col items-start justify-between lg:ml-4 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
        <div>
          <h1
            className={`${
              DarkModeActive
                ? 'text-3xl font-semibold text-[#F6F6F6] lg:text-5xl'
                : 'text-3xl font-semibold text-textPrimary lg:text-5xl'
            }`}
          >
            Latest <span className='text-primary'>Blog</span> Posts
          </h1>
          <p
            className={`${
              DarkModeActive
                ? 'pt-6 text-justify text-base font-normal text-textLight lg:text-[20px]'
                : 'pt-6 text-justify text-base font-normal text-textSecondary lg:text-[20px]'
            }`}
          >
            Stay informed with expert analysis, industry, and actionable tips
            from our blogs.
          </p>
        </div>
        <Link href='/blogs'>
          <Button
            variant='priamryex'
            size={'mdex'}
            className='mb-4 mt-6 w-full max-w-[112px] text-xl font-semibold lg:mb-0'
          >
            View All
          </Button>
        </Link>
      </div>
      <div className='flex flex-col gap-6 lg:ml-4 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
        {isBlogsFetching
          ? // Show 3 skeletons while loading
            Array.from({ length: 3 }).map((_, idx) => (
              <CardSkeleton DarkModeActive={DarkModeActive} key={idx} />
            ))
          : blogs?.slice(0, 3).map((blog) => (
              <Link
                href={`/blogs/${blog?.slug}`}
                key={blog?.blog_post_id}
              >
                <BlogCard
                  src={blog?.thumbnail_url}
                  alt={blog?.title}
                  title={blog?.title}
                  summary={blog?.summary}
                  category={blog?.category}
                  date={blog?.published_at}
                  DarkModeActive={DarkModeActive}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default LandingBlogSection;
