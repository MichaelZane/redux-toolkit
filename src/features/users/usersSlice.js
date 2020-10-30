import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '0', name: 'Bill'},
    { id: '1', name: 'Black Mamba'},
    { id: '2', name: 'Beatrice'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer