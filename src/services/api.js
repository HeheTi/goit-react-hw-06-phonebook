const BASE_URL = 'https://61c4e654f1af4a0017d9985c.mockapi.io/';

const fetchData = async (path = 'contacts', options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getAllContacts = () => fetchData();

const saveItem = (item, endpoint = 'contacts') => {
  const options = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetchData(endpoint, options);
};

const deleteItem = (id, endpoint = 'contacts') =>
  fetchData(`${endpoint}/${id}`, { method: 'DELETE' });

export { getAllContacts, saveItem, deleteItem };
