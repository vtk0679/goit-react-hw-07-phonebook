import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts } from "services/apiService";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await getAllContacts();
    return contacts.data;
  }
);
