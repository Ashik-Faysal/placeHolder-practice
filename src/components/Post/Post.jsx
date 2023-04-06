import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const posts = useLoaderData();
  //   console.log(posts);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <SinglePost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
