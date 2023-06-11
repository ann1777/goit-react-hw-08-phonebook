import axios from 'axios';

// export const authInstance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// export const setAuthHeader = token => {
  // authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(token);
  },  

// export const clearAuthHeader = () => {
  // authInstance.defaults.headers.common.Authorization = '';
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },  
};

export const userSignUp = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
  // const { data: result } = await authInstance.post(
  //   '/users/signup',
  //   credentials
  // );
  // setAuthHeader(result.token);
  // console.log(result);
  // return result;
};

export const userLogin = async credentials => {
  const { data } = await axios.post(`/users/login`, credentials);
  token.set(data.token);
  return data;
  // const { data: result } = await authInstance.post('/users/login', credentials);
  // setAuthHeader(result.token);
  // //console.log(result);
  // return result;
};

export const userLogout = async () => {
  await axios.post(`/users/logout`);
  token.unset();
  // const response = await authInstance.post('/users/logout');
  // clearAuthHeader();
  // return response;
};

export const userCurrent = async savedToken => {
  token.set(savedToken);
  const { data } = await axios.get(`/users/current`);
  return data;
  // setAuthHeader(token);
  // const response = await authInstance.get('/users/current');
  // console.log("userCurrent", response)
  // return response;
};
