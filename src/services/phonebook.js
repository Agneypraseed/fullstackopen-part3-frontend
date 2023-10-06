import axios from "axios";

const baseUrl = "/api/persons";

const getPhonebook = () => {
  const request = axios.get(baseUrl);
  return request
    .then((res) => res.data)
    .catch((err) => console.log("Error while fetching from database", err));
};

const updatePhoneBook = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then((res) => res.status)
    .catch((err) => console.error("Error deleting", err));
};

const updatePerson = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request
    .then((response) => response.data)
    .catch((err) => console.error("Error updating Phonebook", err));
};

export default { getPhonebook, updatePhoneBook, deletePerson, updatePerson };
