import axios from 'axios';
import { NoteFormType } from '@/types/NoteTypes';
import { TEMP_BACKEND_URI } from '@/utils/config';
import Cookies from 'js-cookie';

export const handleNoteUpload = async (data: NoteFormType) => {
  const userData = Cookies.get('user_data');
  const accessToken = userData ? JSON.parse(userData)?.accessToken : null;

  const response = await axios.post(`${TEMP_BACKEND_URI}/notes`, data, {
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return response.data;
};
