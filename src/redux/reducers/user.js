
import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({

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

export const {login , logout } = user.actions 

export default user.reducer 
