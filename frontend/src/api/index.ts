import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobsApi = {
  getAll: () => api.get('/jobs'),
  getBySlug: (slug: string) => api.get(`/jobs/${slug}`),
  getApplications: () => api.get('/user/applications'),
  getTasks: () => api.get('/user/tasks'),
  getPayouts: () => api.get('/user/payouts'),
  getHRStats: () => api.get('/hr/stats'),
  getHRJobs: () => api.get('/hr/jobs'),
  getApplicants: (jobId?: number) => api.get(`/hr/applicants${jobId ? `?jobId=${jobId}` : ''}`),
};

export const authApi = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  register: (userData: any) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
};

export default api;
