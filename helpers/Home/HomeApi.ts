import axios from 'axios';
import { NoteFormType } from '@/types/Note.types';
import { TEMP_BACKEND_URI } from '@/utils/config';
import Cookies from 'js-cookie';

const userData = Cookies.get('user_data');
const accessToken = userData ? JSON.parse(userData)?.accessToken : null;


export const fetchAnalyticsData = async () => 
{
  const response = await axios.get(`${TEMP_BACKEND_URI}/analytics/summary`, {
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });
  return response.data;
};

export const fetchNotesByStatus = async (status: string, topicId?: string) => {
  const params: Record<string, string> = { sortBy: status };
  if (topicId) params.topicId = topicId;

  const response = await axios.get(`${TEMP_BACKEND_URI}/notes/library`, {
    params,
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return response.data;
};

export const fetchTopicList = async () => {
    const response = await axios.get(`${TEMP_BACKEND_URI}/topics/search-topic`, {
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    });
    return response.data;
};

export const fetchIndividualNote = async (noteId: string | number) => {
    const response = await axios.get(`${TEMP_BACKEND_URI}/notes/${noteId}`, {
        headers: {
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
    });
    return response.data;
}
