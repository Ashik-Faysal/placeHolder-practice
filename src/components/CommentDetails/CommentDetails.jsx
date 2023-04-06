import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CommentDetails = () => {
  const comment = useLoaderData();
  // console.log(comment);
  return (
    <div className="my-center">
      <div className="card w-96 h-full bg-stone-400 text-neutral-content ">
        <div className="card-body items-center text-center">
          <h1 className="text-6xl text-stone-300 font-bold">
            Id: {comment.id}
          </h1>
          <h2 className="card-title">{comment.name}</h2>
          <p>{comment.body}</p>
          <Link to={`/`} className="btn btn-error">
            Back Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
