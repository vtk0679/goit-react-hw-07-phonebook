const { default: axios } = require("axios");

export const getAllContacts = async () => {
  const contacts = await axios
    .get("https://619a4c119022ea0017a7b0e5.mockapi.io/contacts")
    .then((response) => response);

  return contacts;
};
