import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const SignIn = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-bgSecondary px-6 md:px-0'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-2 text-start text-2xl font-bold text-black'>
          Sign In
        </h1>
        <div className='mb-6 text-start text-sm text-inputFooterColor'>
          Sign in to continue.
        </div>
        <form className='flex flex-col gap-4'>
          <div>
            <Label htmlFor='email' className='mb-1 block text-sm font-medium'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='w-full'
              required
            />
          </div>
          <div>
            <Label
              htmlFor='password'
              className='mb-1 block text-sm font-medium'
            >
              Password
            </Label>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='w-full'
              required
            />
          </div>
          <Button type='submit' className='mt-2 w-full'>
            Sign In
          </Button>
        </form>
        <div className='mt-6 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up' className='text-primary underline'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
