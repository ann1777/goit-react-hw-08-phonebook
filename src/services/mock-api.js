import { authInstance } from './authServices';

export const fetchContacts  = () => authInstance.get('/contacts');

export const postContacts = contact =>
authInstance.post('/contacts', { ...contact });

export const deleteContacts = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
    return authInstance.patch(`/contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
  };