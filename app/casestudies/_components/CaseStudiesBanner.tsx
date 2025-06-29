import Image from 'next/image';

interface CaseStudiesBannerProps {
  images: string;
}

const CaseStudiesBanner = ({ images }: CaseStudiesBannerProps) => (
  <div className='lg:px-[20px] xl:px-[20px] 2xl:px-[250px]'>
    <div className='hidden w-full items-center justify-center lg:flex lg:px-32 lg:py-16'>
      <Image src={images} alt='Case Study Image' width={1700} height={500} />
    </div>
    <div className='flex w-full items-center justify-center px-4 pb-12 pt-10 lg:hidden'>
      <Image src={images} alt='Case Study Image' width={380} height={200} />
    </div>
  </div>
);

export default CaseStudiesBanner;