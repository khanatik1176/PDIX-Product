import { backendUrl } from '@/utils/config';
import { LandingFormTypes } from '@/types/LandingFormTypes';
import axios from 'axios';

export const LandingContact = async (formData: LandingFormTypes) => {
  const res = await axios.post(`${backendUrl}/api/contact/create`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log('Response from API:', res.data);
    return res.data;
};

export const GetCaseStudies = async () => 
{
  const res = await axios.get(`${backendUrl}/api/case-studies/get-case-studies`);

  console.log('Response from API:', res.data);
  return res.data;
}

export const GetCaseStudiesById = async (id: string) => {
  const res = await axios.get(`${backendUrl}/api/case-studies/${id}`);

  return res.data;
};

export const GetBlogs = async () => 
{
  const res = await axios.get(`${backendUrl}/api/blogs`);

  return res.data;
}
