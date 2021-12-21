import React, { useCallback } from "react";
import {
  useAppDispatch,
  useAppSelector,
  fetchPosts,
  fetchPost,
  TPost,
  TPostComments,
  fetchComments,
} from "../redux";

interface TGetPosts {
  posts: TPost[];
  post: TPost | undefined;
  comments: TPostComments[];
  getPosts: () => void;
  getPost: (id: string | undefined) => void;
  getComments: (id: string | undefined) => void;
}

export const usePosts = (): TGetPosts => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);
  const post = useAppSelector((state) => state.post.post);
  const comments = useAppSelector((state) => state.post.comments);

  const getPosts = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getPost = useCallback(
    (id: string | undefined) => {
      dispatch(fetchPost(id));
    },
    [dispatch]
  );

  const getComments = useCallback(
    (id: string | undefined) => {
      dispatch(fetchComments(id));
    },
    [dispatch]
  );

  return {
    posts,
    post,
    comments,
    getPosts,
    getPost,
    getComments,
  };
};
