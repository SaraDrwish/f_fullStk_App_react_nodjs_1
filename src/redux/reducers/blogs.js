
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyError } from '../../componants/Notify'
import Api from "../../config/api"

export const fetchUserBlogs = createAsyncThunk( 
    "blogs/fetchUserBlogs",
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



export const fetchAminBlogs = createAsyncThunk( 
    "blogs/fetchAminBlogs",
    async (_, thunkApi) => {
        try {
            const response = await Api.get("/blog/allblogs")
            return response.data
        } catch (error) {
            console.log(error);
            const errMsg = error?.response?.data?.message || error?.response?.data?.error;
            notifyError(errMsg)
            return thunkApi.rejectWithValue(errMsg)

        }
    }
)






export const blogs = createSlice({

    name: "blogs",
    initialState: {
        date: {},
        allData : []
 
    },
    reducers: {
        
        
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchUserBlogs.fulfilled, (state, action) => {
            state.date = action.payload
         }) 
         
        builder.addCase(fetchAminBlogs.fulfilled, (state, action) => {
            state.allData = action.payload
         })

   
            
    }

})  

export const { } = blogs.actions 

export default blogs.reducer 
