/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingNav from '@/components/Landing/LandingNav';
import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BlogCards from '@/components/Blogs/BlogCards';
import Link from 'next/link';
import { ModeContext } from '@/contexts/ModeContext';
import { useQuery } from '@tanstack/react-query';
import { GetBlogs } from '@/helpers/Landing/LandingApi';
import Loader from '@/components/loader';
import Productivity from '@/public/Images/productivityBlog.svg';
import type { Blogs } from '@/types/LandingTypes';

function useLgShowFour() {
  const [showFour, setShowFour] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowFour(window.innerWidth >= 1024 && window.innerWidth < 1280); // lg only
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return showFour;
}

const Blogs = () => {
  const { isDarkModeActive, setIsDarkModeActive } = useContext(
    ModeContext
  ) as ModeContextType;
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore((prev) => !prev);
  };

  const {
    data: blogs,
    isFetching: isBlogsFetching,
    refetch: refetchBlogs,
  } = useQuery<Blogs[]>({
    queryKey: ['blogs'],
    queryFn: () => GetBlogs(),
    refetchOnWindowFocus: false,
  });

  const showFour = useLgShowFour();

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
        <div className='flex items-center justify-center px-12 pt-20 lg:px-36 2xl:px-[384px]'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <span className='w-full max-w-[130px] rounded-full bg-[#BFDBF8] px-4 py-2 text-center text-twelve font-normal text-congressBlue'>
              Blog
            </span>
            <h1
              className={`w-full max-w-[250px] text-center text-3xl font-semibold lg:max-w-[600px] lg:text-5xl ${
                isDarkModeActive ? 'text-[#F6F6F6]' : 'text-[#000000]'
              }`}
            >
              The <span className='text-primary'>Knowledge</span> Hub
            </h1>
            <p
              className={`w-full max-w-[300px] text-center text-[16px] font-normal lg:max-w-[1100px] lg:text-3xl ${
                isDarkModeActive ? 'text-textLight' : 'text-textSecondary'
              }`}
            >
              Our blog shares what we&apos;ve learned, what excites us, and what
              can help you grow—one story at a time.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center 2xl:px-[220px]'>
          {isBlogsFetching ? (
            <Loader />
          ) : blogs ? (
            <div className='grid grid-cols-1 gap-6 px-12 lg:mx-36 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12 lg:px-0 xl:gap-16'>
              {/* Initial Cards: 4 on lg, 3 otherwise */}
              {blogs
                .slice(0, showFour ? 4 : 3)
                .map((blog) => (
                  <Link href={`/blogs/${blog?.slug}`} key={blog?.blog_post_id}>
                    <BlogCards
                      src={blog?.thumbnail_url}
                      alt={blog?.title}
                      title={blog?.title}
                      summary={blog?.summary}
                      category={blog?.category}
                      date={blog?.published_at}
                      DarkModeActive={isDarkModeActive}
                    />
                  </Link>
                ))}

              {/* Additional Cards (Lazy Loaded with Animation) */}
              <AnimatePresence>
                {showMore && (
                  <>
                    {blogs
                      .slice(showFour ? 4 : 3, (showFour ? 4 : 3) + 3)
                      .map((blog, idx) => (
                        <motion.div
                          key={blog?.blog_post_id ?? idx}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 50 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Link href={`/blogs/${blog?.slug}`}>
                            <BlogCards
                              src={blog?.thumbnail_url}
                              alt={blog?.title}
                              title={blog?.title}
                              summary={blog?.summary}
                              category={blog?.category}
                              date={blog?.published_at}
                              DarkModeActive={isDarkModeActive}
                            />
                          </Link>
                        </motion.div>
                      ))}
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : null}

          {/* View More Button */}
          {blogs && blogs.length > (showFour ? 4 : 3) && (
            <Button
              className='mt-12 w-full max-w-[130px] rounded-lg'
              onClick={handleViewMore}
            >
              {showMore ? 'View less' : 'View more'}
            </Button>
          )}
        </div>

        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
};

export default Blogs;