import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../usePost";

import "./style.scss";

export const Post = () => {
  const { id } = useParams();

  const { post, getPost, comments, getComments } = usePosts();

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, [getPost, getComments]);

  if (post === undefined) return null;

  console.log("comments", comments);

  return (
    <div className="pageJSX">
      <div className="header">{post.title}</div>
      <div className="content">{post.body}</div>
      <div className="comment">comment</div>
    </div>
  );
};
