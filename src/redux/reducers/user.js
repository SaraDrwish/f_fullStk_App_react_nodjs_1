
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyError  } from '../Notify'
import Api from "../../config/api"

export const fetchUserData = createAsyncThunk( 
    "user/fetchUserData",
    async (_, thunkApi) => {
        try {
            const response = await Api.get("/user")
            return response.data
        } catch (error) {
            console.log(error);
            const errMsg = error?.response?.data?.message || error?.response?.data?.error;
            notifyError(errMsg)
            return thunkApi.rejectWithValue(errMsg)

        }
    }
)


export const userLogout = createAsyncThunk( 
    "user/logout",
    async (_, thunkApi) => {
        try {
             const response = await Api.post("/user/logout")
            return response.data
        } catch (error) {
            console.log(error);
            const errMsg = error?.response?.data?.message || error?.response?.data?.error;
            notifyError(errMsg)
            return thunkApi.rejectWithValue(errMsg)

        }
    }
)



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
        
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.date = action.payload
            state.isLogin = true
        })

        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.isLogin = false
        } )
            
    }

})  

export const {login , logout } = user.actions 

export default user.reducer 
