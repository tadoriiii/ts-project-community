import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onRequestPost } from "../../common";

export type TPost = {
  id: number;
  title: string;
  body: string;
};

export type TPostComments = {
  id: number;
  name: string;
  body: string;
};

type PostState = {
  posts: TPost[];
  post: TPost | undefined;
  comments: TPostComments[];
};

const initialState: PostState = {
  posts: [],
  post: undefined,
  comments: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await onRequestPost("/posts");
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("fail");
  }
});

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id: string | undefined) => {
    const response = await onRequestPost(`/posts/${id}`);
    if ((response.status = 200)) {
      return response.data;
    } else {
      console.log("fail");
    }
  }
);

export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async (id: string | undefined) => {
    const response = await onRequestPost(`/posts/${id}/comments`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("fail");
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default postsSlice.reducer;
