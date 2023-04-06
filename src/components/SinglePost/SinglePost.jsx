import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">title: {title}</h2>
        <p>{body}</p>
        <p className="text-center">
          <Link className="btn btn-accent" to={`/post/${id}`}>
            Show Detail
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
