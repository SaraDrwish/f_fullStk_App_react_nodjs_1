
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: "user",
    initialState: {
        date:{},
        isLogin: false,

    },
    reducers: {
        login: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin= false
        }
        
    }

})  

export const {login , logout } = counterSlice.actions 

export default counterSlice.reducer 
