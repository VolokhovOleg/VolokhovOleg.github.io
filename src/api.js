import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://api.instagram.com/oauth/authorize?client_id=1576420319199590&redirect_uri=https://github.com/VolokhovOleg/&scope=user_profile,user_media&response_type=code`,
    timeout: 5000,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
