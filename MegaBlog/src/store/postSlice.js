import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/config";
import { useEffect } from "react";


const initialState ={
    posts:[],
    status:'idle',
    error:null
}


const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        createPost:(state,action)=>{
            state.posts.push(action.payload);
        }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
            state.posts = state.posts.concat(action.payload)
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
})

export default postSlice.reducer

export const {createPost} = postSlice.actions

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
        const response = await appwriteService.getPosts([]);
        return response.documents
    }
)