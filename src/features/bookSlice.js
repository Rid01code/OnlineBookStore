import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    books: [
        {
            id: '1',
            title: 'Atomic Habits',
            author: 'James Clear',
            category: 'Non-Fiction',
            description: 'A book about building good habits.',
            rating: 4.8,
        },
        {
            id: '2',
            title: 'Dune',
            author: 'Frank Herbert',
            category: 'Sci-Fi',
            description: 'Epic science fiction saga.',
            rating: 4.5,
        },
    ],
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push({ id: nanoid(), ...action.payload });
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;