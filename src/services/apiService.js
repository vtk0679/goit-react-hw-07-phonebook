import axios from "axios";

axios.defaults.baseURL = "https://619a4c119022ea0017a7b0e5.mockapi.io";

export const apiGetContacts = async () => {
  try {
    const contacts = await axios.get("/contacts").then((response) => response);
    console.log(contacts.data);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiAddContact = async (contact) => {
  try {
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDeleteContact = async (id) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log("error: ", error);
  }
};
