import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const fetchContacts = createAsyncThunk("contacts/fetchAllContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;

    } catch (e) {
        console.log(e.message);

        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", (newContact));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk("contacts?deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);

        }
    });
export const updateContact = createAsyncThunk(
    "contacts/updateContact",
    async ({ id, values }, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, (values));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);