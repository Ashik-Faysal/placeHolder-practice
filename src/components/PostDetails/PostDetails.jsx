import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div className="my-center">
      <div className="card w-96 h-full bg-stone-400 text-neutral-content ">
        <div className="card-body items-center text-center">
          <h1 className="text-6xl text-stone-300 font-bold">Id: {post.id}</h1>
          <h2 className="card-title">Title: {post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post`} className="btn btn-error">
            Back Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
