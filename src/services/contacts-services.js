// import { authInstance } from './auth-services';
import axios from 'axios';
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const getAllContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
}
// authInstance.get('/contacts');


export const addContact = async newContact => {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}
  // authInstance.post('/contacts', { ...contact });

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
// authInstance.delete(`/contacts/${id}`);

export const editContact = async contact => {
  const { data } = await axios.delete(`/contacts/${contact.id}`);
  return data;

  // return authInstance.patch(`/contacts/${contact.id}`, {
  //   name: contact.name,
  //   number: contact.number,
  // });
};
