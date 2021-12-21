import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { usePosts } from "../usePost";
import "./style.scss";

export const Home = (): React.ReactElement => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("posts", posts);

  return (
    <div className="homeJSX">
      <div className="header">Community</div>
      <ul>
        {posts.map((post) => {
          return (
            <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="postList" key={post.id}>
                {post.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
