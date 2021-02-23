import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
};

const BASE_URL = 'http://localhost:3000';

// Hack setting auth config for now.
const getAuthorizedConfig = () => {
  const userStore = window.localStorage.getItem('persist:root');
  let accessToken = '';
  if (userStore) {
    const { user } = JSON.parse(userStore);
    accessToken = JSON.parse(user).accessToken;
  }
  return {
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` },
    timeout: 10000,
  };
};

export const moodTrackerApi = axios.create({ ...requestConfig, baseURL: BASE_URL });

export const authMoodTrackerApi = axios.create(getAuthorizedConfig());
