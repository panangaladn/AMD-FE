import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Contact {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
}

interface ContactState {
    items: Contact[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ContactState = {
    items: [],
    status: 'idle',
};

const API_URL = 'http://10.0.2.2:5000/contacts'; // Android Emulator localhost

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
    const res = await axios.get<Contact[]>(API_URL);
    return res.data;
});

export const addContact = createAsyncThunk('contacts/add', async (contact: Omit<Contact, 'id'>) => {
    const res = await axios.post<Contact>(API_URL, contact);
    return res.data;
});

export const updateContact = createAsyncThunk('contacts/update', async ({ id, data }: { id: number; data: Omit<Contact, 'id'> }) => {
    const res = await axios.put<Contact>(`${API_URL}/${id}`, data);
    return res.data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action: PayloadAction<Contact>) => {
                state.items.push(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action: PayloadAction<Contact>) => {
                const idx = state.items.findIndex(c => c.id === action.payload.id);
                if (idx !== -1) state.items[idx] = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action: PayloadAction<number>) => {
                state.items = state.items.filter(c => c.id !== action.payload);
            });
    },
});

export default contactsSlice.reducer;
