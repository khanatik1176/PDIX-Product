import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-bgSecondary'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-center text-2xl font-bold text-primary'>
          Sign Up
        </h1>
        <form className='flex flex-col gap-4'>
          <div>
            <Label htmlFor='name' className='mb-1 block text-sm font-medium'>
              Name
            </Label>
            <Input
              id='name'
              type='text'
              placeholder='Enter your name'
              className='w-full'
              required
            />
          </div>
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
              placeholder='Create a password'
              className='w-full'
              required
            />
          </div>
          <Button type='submit' className='mt-2 w-full'>
            Sign Up
          </Button>
        </form>
        <div className='mt-6 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/sign-in' className='text-primary underline'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
