
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyError } from '../../componants/Notify'
import Api from "../../config/api"

export const fetchUserBlogs = createAsyncThunk( 
    "user/fetchUserBlogs",
    async (_, thunkApi) => {
        try {
            const response = await Api.get("/blog")
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

    name: "blog",
    initialState: {
        date:{},
 
    },
    reducers: {
        
        
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchUserBlogs.fulfilled, (state, action) => {
            state.date = action.payload
         })

   
            
    }

})  

// export const {login } = user.actions 

export default user.reducer 
