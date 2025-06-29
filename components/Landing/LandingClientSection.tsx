'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ClientImage from '@/public/Images/ClientImg.svg';
import { LandingGeneralProps } from '@/types/LandingTypes';

const LandingClientSection: React.FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const clients = [
    {
      id: 1,
      company: 'TechFlow',
      feedback:
        "“The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.”",
      name: 'Michael Rodriguez',
      position: 'Product Manager, TechFlow',
      location: 'New York, USA',
      image: ClientImage,
    },
    {
      id: 2,
      company: 'InnovateX',
      feedback:
        "“The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.”",
      name: 'Sarah Johnson',
      position: 'CEO, InnovateX',
      location: 'San Francisco, USA',
      image: ClientImage,
    },
    {
      id: 3,
      company: 'CodeCraft',
      feedback:
        "“The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.”",
      name: 'David Lee',
      position: 'CTO, CodeCraft',
      location: 'London, UK',
      image: ClientImage,
    },
    {
      id: 4,
      company: 'NextGen',
      feedback:
        "“The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.”",
      name: 'Emily Davis',
      position: 'Product Owner, NextGen',
      location: 'Berlin, Germany',
      image: ClientImage,
    },
    {
      id: 5,
      company: 'BrightTech',
      feedback:
        "“The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.”",
      name: 'James Wilson',
      position: 'Founder, BrightTech',
      location: 'Sydney, Australia',
      image: ClientImage,
    },
  ];

  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl font-semibold lg:text-5xl'>
          Our <span className='text-primary'>Clients</span>
        </h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        opts={{ loop: true }}
      >
        {/* Desktop navigation */}
        <div className='mb-4 hidden justify-end gap-8 pr-2 lg:flex'>
          <CarouselPrevious
            className={DarkModeActive ? 'text-white' : 'text-black'}
          >
            <ChevronLeft />
          </CarouselPrevious>
          <CarouselNext
            className={DarkModeActive ? 'text-white' : 'text-black'}
          >
            <ChevronRight />
          </CarouselNext>
        </div>
        <CarouselContent>
          {clients.map((client) => (
            <CarouselItem
              key={client.id}
              className='flex basis-full justify-center xl:basis-2/3 2xl:basis-2/3 px-6 lg:pl-8'
            >
              <Card className='h-full  lg:max-h-[450px] w-full rounded-xl bg-gradientBg p-4 border-transparent'>
                <CardContent className='p-0'>
                  <div className='flex flex-col gap-14 lg:flex-row'>
                    <div>
                      <h1
                        className={`${
                          DarkModeActive
                            ? 'text-[20px] font-bold text-[#F6F6F6] lg:text-2xl'
                            : 'text-[20px] font-bold text-textPrimary lg:text-2xl'
                        }`}
                      >
                        {client.company}
                      </h1>
                      <p
                        className={`${
                          DarkModeActive
                            ? 'w-full max-w-[350px] pt-3 text-justify text-twelve font-medium text-textLight lg:text-base'
                            : 'w-full max-w-[350px] pt-3 text-justify text-twelve font-medium text-textSecondary lg:text-base'
                        }`}
                      >
                        {client.feedback}
                      </p>
                      <div className='flex justify-center lg:hidden'>
                        <Image
                          src={client.image}
                          alt={`${client.name} Image`}
                          className='block h-full max-h-[256px] w-full max-w-[250px] lg:pl-4 pt-4 lg:hidden'
                        />
                      </div>
                      <div className='pt-2 pl-4 lg:pt-20'>
                        <p className='font-semibold lg:text-[20px]'>
                          {client.name}
                        </p>
                        <p
                          className={`${
                            DarkModeActive
                              ? 'text-twelve font-normal text-textLight'
                              : 'text-twelve font-normal text-textSecondary'
                          }`}
                        >
                          {client.position}
                        </p>
                        <p
                          className={`${
                            DarkModeActive
                              ? 'text-twelve font-normal text-textLight'
                              : 'text-twelve font-normal text-textSecondary'
                          }`}
                        >
                          {client.location}
                        </p>
                      </div>
                    </div>
                    <Image
                      src={client.image}
                      alt={`${client.name} Image`}
                      className='hidden h-full max-h-[256px] w-full max-w-[260px] lg:block lg:ml-8 lg-xl:ml-0 2xl:ml-24'
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LandingClientSection;
