import { BlogBannerProps } from '@/types/BlogTypes';
import Image from 'next/image';
import Logo from '@/public/Images/AIBlog.svg'


const BlogBanner = ({ images }: BlogBannerProps) => (
  <div className='lg:px-[20px] xl:px-[20px] 2xl:px-[250px]'>
    <div className='hidden w-full items-center justify-center lg:flex lg:px-0 lg:py-4'>
      <Image src={images} alt='Case Study Image' width={1300} height={100} />
    </div>
    <div className='flex w-full items-center justify-center px-4 pb-12 pt-10 lg:hidden'>
      <Image src={images} alt='Case Study Image' width={380} height={200} />
    </div>
  </div>
);

export default BlogBanner;