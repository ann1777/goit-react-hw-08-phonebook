// import { authInstance } from './auth-services';
import axios from 'axios';
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export async function getAllContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
// authInstance.get('/contacts');


export async function addContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}
  // authInstance.post('/contacts', { ...contact });

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
// authInstance.delete(`/contacts/${id}`);

export async function editContact(contact) {
  const { data } = await axios.delete(`/contacts/${contact.id}`);
  return data;

  // return authInstance.patch(`/contacts/${contact.id}`, {
  //   name: contact.name,
  //   number: contact.number,
  // });
};
