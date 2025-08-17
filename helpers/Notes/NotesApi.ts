import axios from 'axios';
import { NoteFormType } from '@/types/NoteTypes';
import { TEMP_BACKEND_URI } from '@/utils/config';
import Cookies from 'js-cookie';

const userData = Cookies.get('user_data');
const accessToken = userData ? JSON.parse(userData)?.accessToken : null;

export const handleNoteUpload = async (data: NoteFormType) => {

  const response = await axios.post(`${TEMP_BACKEND_URI}/notes`, data, {
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return response.data;
};

export const getAllEducationLevels = async () => {
  const response = await axios.get(`${TEMP_BACKEND_URI}/education-levels`, {
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return response.data;
};

export const getClassesByEducationLevel = async (educationLevelId: string) => {
  const response = await axios.get(`${TEMP_BACKEND_URI}/classes/by-education-level/${educationLevelId}`, {
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    }
  });
  return response.data;
};

export const getSubjectByClassId = async (classId: string) => {
  const response = await axios.get(`${TEMP_BACKEND_URI}/subjects/search/${classId}?keyword=gl`, {
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return response.data;
};
