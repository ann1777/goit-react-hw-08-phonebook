import { authInstance } from './auth-services';

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
  return authInstance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
};
