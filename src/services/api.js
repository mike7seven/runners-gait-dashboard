import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post('/videos/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

export const findSimilarGaits = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post('/videos/compare', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

export const getVideoMetadata = async (videoId) => {
  const response = await api.get(`/videos/${videoId}/metadata`);
  return response.data;
};

export const getVideoAnalysis = async (videoId) => {
  const response = await api.get(`/videos/${videoId}/analysis`);
  return response.data;
};

export default api; 