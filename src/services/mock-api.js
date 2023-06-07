import axios from 'axios';

axios.defaults.baseURL = 'https://647de0acaf984710854a85e8.mockapi.io';

export async function fetchContacts() {
    const response = await axios.get('/contacts');
    return response;
}

export async function postContacts(data) {
    const response = await axios.post('/contacts', data);
    return response.data;
}

export async function deleteContacts(id) {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
}