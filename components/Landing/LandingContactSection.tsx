import React, { FC } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LandingSchema } from '@/schema/LandingSchema';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';
import { useForm, Controller } from 'react-hook-form';
import { LandingFormTypes } from '@/types/LandingFormTypes';
import { LandingGeneralProps } from '@/types/LandingTypes';
import { useMutation } from '@tanstack/react-query';
import { LandingContact } from '@/helpers/Landing/LandingApi';
import { toast } from '@/hooks/use-toast';
import { Circle } from 'lucide-react';

const LandingContactSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<LandingFormTypes>({
    resolver: zodResolver(LandingSchema),
    defaultValues: {
      name: '',
      company_name: '',
      email: '',
      inquiry_type: '',
      message: '',
      budget: '',
    },
  });

  const LandingContactCreateMutation = useMutation({
    mutationFn: (data: LandingFormTypes) => LandingContact(data),
    onSuccess: () => {
      toast({
        title: 'Success!',
        description:
          'Thank you for your interest will be reaching you shortly.',
      });
      reset();
    },
  });

  const onSubmit = (data: LandingFormTypes) => {
    clearErrors();
    LandingContactCreateMutation.mutate(data);
  };

  return (
    <div
      className={`${DarkModeActive ? 'bg-[#0F172A] px-12 py-8 lg:px-36 lg:py-6 2xl:px-[384px]' : 'bg-secondary px-12 py-8 lg:px-36 lg:py-6 2xl:px-[384px]'}`}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-72 2xl:gap-72'>
        <div className='pt-12 lg:pt-[160px] xl:min-w-[800px]'>
          <h1 className='text-3xl xl:max-w-[600px] xl:text-5xl w-full text-justify  font-semibold lg:max-w-[600px] lg:text-3xl 2xl:text-5xl'>
            Ready to Bring Your Idea <br className='hidden lg:hidden xl:block'/>
            to Life ? We&apos;re Here to <br className='hidden lg:hidden xl:block'/>
            Help
          </h1>
          <ul className='list-disc pl-7 pt-6'>
            <li
              className={`${DarkModeActive ? 'text-[20px] font-normal text-textLight' : 'text-[20px] font-normal text-textSecondary'}`}
            >
              Let&apos;s talk — schedule a call to discuss your needs.
            </li>
            <li
              className={`${DarkModeActive ? 'text-[20px] font-normal text-textLight' : 'text-[20px] font-normal text-textSecondary'}`}
            >
              We&apos;ll present relevant work and solutions.
            </li>
            <li
              className={`${DarkModeActive ? 'text-[20px] font-normal text-textLight' : 'text-[20px] font-normal text-textSecondary'}`}
            >
              If it clicks, you&apos;ll receive a personalized project roadmap.
            </li>
          </ul>
          <Button
            variant='priamryex'
            size={'mdex'}
            className='mb-4 mt-6 w-full max-w-[166px] text-xl font-semibold lg:mb-0'
          >
            Book a free call
          </Button>

          <div className='hidden pt-16 lg:block'>
            <p
              className={`${DarkModeActive ? 'text-base font-normal text-textLight' : 'text-base font-normal text-textSecondary'}`}
            >
              Reach out via email to explore business collaborations.
            </p>
            <p
              className={`${DarkModeActive ? 'pt-3 text-[20px] font-semibold text-[#F6F6F6]' : 'pt-3 text-[20px] font-semibold text-textPrimary'}`}
            >
              info@pentadevIX.com
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className='relative pt-12 lg:pb-[80px] lg:pt-[80px]'>
          {/* Custom Primary Border */}
          <div
            className={`${DarkModeActive ? 'absolute top-10 z-0 h-6 w-full rounded-xl bg-[#BFDBF8] lg:top-[70px] lg:max-w-[465px]' : 'absolute top-10 z-0 h-6 w-full rounded-xl bg-primary lg:top-[70px] lg:max-w-[465px]'}`}
          ></div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${DarkModeActive ? 'relative z-10 h-full w-full space-y-6 rounded-xl bg-[#20242d] p-8 xl:max-w-[465px]' : 'relative z-10 h-full w-full space-y-6 rounded-xl bg-white p-8 xl:max-w-[465px]'}`}
          >
            {/* First Name and Company Name */}
            <div className='grid grid-cols-1 gap-8 2xl:grid-cols-2'>
              <div className='relative'>
                <label
                  htmlFor='firstName'
                  className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
                >
                  Name
                </label>
                <Controller
                  name='name'
                  control={control}
                  render={({ field }) => (
                    <Input id='firstName' placeholder='Name' {...field} />
                  )}
                />
                {errors.name && (
                  <p className='absolute pt-1 text-sm text-red-500'>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className='relative'>
                <label
                  htmlFor='companyName'
                  className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
                >
                  Company Name
                </label>
                <Controller
                  name='company_name'
                  control={control}
                  render={({ field }) => (
                    <Input
                      id='companyName'
                      placeholder='Company Name'
                      {...field}
                    />
                  )}
                />
                {errors.company_name && (
                  <p className='absolute pt-1 text-sm text-red-500'>
                    {errors.company_name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className='relative pt-2'>
              <label
                htmlFor='email'
                className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
              >
                Email
              </label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <p className='absolute pt-1 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* What you are looking for? */}
            <div className='relative pt-2'>
              <label
                htmlFor='lookingFor'
                className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
              >
                What you are looking for?
              </label>
              <Controller
                name='inquiry_type'
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger id='inquiry_type'>
                      <SelectValue placeholder='Select an option' />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value='Web Development'>
                        Web Development
                      </SelectItem>
                      <SelectItem value='Mobile App Development'>
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                      <SelectItem value='Consulting'>Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.inquiry_type && (
                <p className='absolute pt-1 text-sm text-red-500'>
                  {errors.inquiry_type.message}
                </p>
              )}
            </div>

            {/* How Can We Help You */}
            <div className='relative pt-2'>
              <label
                htmlFor='help'
                className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
              >
                How Can We Help You?
              </label>
              <Controller
                name='message'
                control={control}
                render={({ field }) => (
                  <Textarea
                    id='message'
                    placeholder='Describe your requirements'
                    {...field}
                  />
                )}
              />
              {errors.message && (
                <p className='absolute pt-1 text-sm text-red-500'>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* What is Your Budget? */}
            <div className='relative pb-4 pt-2'>
              <label
                htmlFor='budget'
                className={`${DarkModeActive ? 'block pb-2 text-sm font-medium text-[#F6F6F6]' : 'block pb-2 text-sm font-medium text-textPrimary'} `}
              >
                What is Your Budget?
              </label>
              <Controller
                name='budget'
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger id='budget'>
                      <SelectValue placeholder='Select your budget' />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value='below5k'>Below $5,000</SelectItem>
                      <SelectItem value='5kTo10k'>$5,000 - $10,000</SelectItem>
                      <SelectItem value='10kTo20k'>
                        $10,000 - $20,000
                      </SelectItem>
                      <SelectItem value='above20k'>Above $20,000</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.budget && (
                <p className='absolute pt-1 text-sm text-red-500'>
                  {errors.budget.message}
                </p>
              )}
            </div>

            {/* Send Button */}
            <Button
              type='submit'
              className='h-[50px] w-full rounded-xl bg-primary text-white'
            >
              {LandingContactCreateMutation.isPending ? (
                <Circle className='animate-spin' size={14} />
              ) : (
                'Send'
              )}
            </Button>
          </form>
        </div>
        <div className='block pb-10 pt-16 lg:hidden'>
          <p
            className={`${DarkModeActive ? 'text-base font-normal text-textLight' : 'text-base font-normal text-textSecondary'}`}
          >
            Reach out via email to explore business collaborations.
          </p>
          <p
            className={`${DarkModeActive ? 'pt-3 text-[20px] font-semibold text-[#F6F6F6]' : 'pt-3 text-[20px] font-semibold text-textPrimary'}`}
          >
            info@pentadevIX.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingContactSection;
