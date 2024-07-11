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
        // postAdded:(state,action)=>{
        //     state.posts.push(action.payload);
        // }
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
        .addCase(createNewPost.fulfilled,(state,action) => {
            state.posts.push(action.payload)            
        })
    }
})

export default postSlice.reducer

//export const {postAdded} = postSlice.actions

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
        const response = await appwriteService.getPosts([]);
        return response.documents
    }
)

export const createNewPost = createAsyncThunk('posts/createPost',
    async (initialPost) => {
        debugger;

        const {title,slug,content,featuredImage,status,userId} = initialPost;
        const response = await appwriteService.createPost({title,slug,content,featuredImage,status,userId});
        return response
    }
)