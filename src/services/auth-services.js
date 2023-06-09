import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const setAuthHeader = token => {
  // authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
console.log(token);
};

export const clearAuthHeader = () => {
  // authInstance.defaults.headers.common.Authorization = '';
  axios.defaults.headers.common.Authorization = ``;
};

export const userSignUp = async credentials => {
  const { data: result } = await axios.defaults.baseURL.post('/users/signup', credentials);
  setAuthHeader(result.token);
  console.log(result);
  return result;
};

export const userLogin = async credentials => {
  const { data: result } = await axios.defaults.baseURL.post('/users/login', credentials);
  setAuthHeader(result.token);
  //console.log(result);
  return result;
};

export const userLogout = async () => {
  const response = await axios.defaults.baseURL.post('/users/logout');
  clearAuthHeader();
  return response;
};

export const userCurrent = async token => {
  setAuthHeader(token);
  const response = await axios.defaults.baseURL.get('/users/current');
  return response;
};
