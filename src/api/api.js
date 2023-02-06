import axios from 'axios';

const BASE_URL = 'https://63dfbde48b24964ae0f330f7.mockapi.io/contacts';

export const getContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};

export const addContactsData = async contact => {
  const { data } = await axios.post(`${BASE_URL}`, contact);
  return data;
};

export const deleteContactsData = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}/${contactId}`);
  console.log('data', data);
  return data;
};
