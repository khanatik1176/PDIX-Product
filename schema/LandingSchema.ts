import { z } from 'zod';

export const LandingSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'Name is required' }),
  company_name: z
    .string({ required_error: 'Company Name is required' })
    .min(1, {
      message: 'Company Name is required',
    }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  inquiry_type: z
    .string({ required_error: 'Valid inquiry is required' })
    .min(1, {
      message: 'Valid inquiry is required',
    }),
  message: z.string({ required_error: 'Requirement is required' }).min(1, {
    message: 'Requirement is required',
  }),
  budget: z.string({ required_error: 'Budget is required' }).min(1, {
    message: 'Budget is required',
  }),
});
