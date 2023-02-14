import axios from 'axios';

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(function (config) {
  const tokenStr = localStorage.getItem('accessToken');
  config.url = `${config.url}`;
  config.headers = { Authorization: `Bearer ${tokenStr}` };

  return config;
});

const api = {
  setGenerationIdeas: async (text: string) => {
    return apiInstance.post('generation/', {
      text,
    });
  },
  setPost: async (title?: string, body?: string, categories: number[] = []) => {
    return apiInstance.post('posts/', {
      title,
      body,
      categories,
    });
  },
  login: async (user: string, password: string) => {
    return apiInstance.post(`api-auth/login/`, {
      user,
      password,
    });
  },
};

export default api;
