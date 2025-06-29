'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Client = {
  id: number;
  company: string;
  feedback: string;
  name: string;
  position: string;
  location: string;
  image: any;
};

interface CustomCarouselProps {
  clients: Client[];
  DarkModeActive: boolean;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ clients, DarkModeActive }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-semibold lg:text-5xl'>
          Our <span className='text-primary'>Clients</span>
        </h1>
        <div className='hidden gap-8 pr-2 lg:flex'>
          <CarouselPrevious>
            <ChevronLeft />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight />
          </CarouselNext>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {clients.map((client) => (
            <CarouselItem key={client.id} className="flex justify-center">
              <Card className="h-full max-h-[450px] w-full max-w-[720px] rounded-xl bg-gradientBg p-4 lg:max-h-[305px]">
                <CardContent className="p-0">
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
                      <Image
                        src={client.image}
                        alt={`${client.name} Image`}
                        className='block h-full max-h-[256px] w-full max-w-[206px] pl-4 pt-4 lg:hidden'
                      />
                      <div className='pt-6 lg:pt-20'>
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
                      className='hidden h-full max-h-[256px] w-full max-w-[260px] lg:block'
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 pt-4 lg:hidden">
          <CarouselPrevious>
            <ChevronLeft />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;