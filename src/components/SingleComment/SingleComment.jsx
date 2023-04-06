import React from "react";
import { Link } from "react-router-dom";

const SingleComment = ({ comment }) => {
  const { name, email, body, id } = comment;
  return (
    <div>
      <div className="card w-96 h-full bg-stone-400 text-neutral-content ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>{body}</p>
          <p>
            <Link className="btn btn-accent" to={`/comment/${id}`}>
              show me details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
