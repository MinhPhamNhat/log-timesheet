import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "Minh"}},
    reducers: {
        login: (state, action) => {
            
        }
    }
})