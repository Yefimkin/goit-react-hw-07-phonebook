import axios from "axios";

const BASE_URL = 'https://63612196af66cc87dc23f038.mockapi.io/api/contacts';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchApiContacts() {
  const data = await instance.get('/');
  return data.data;
}

export async function addApiContact(newContact) {
  const data = await instance.post('/', newContact);
  return data.data;
}

export async function deleteApiContact(id) {
  await instance.delete(`/${id}`);
  return id;
}
