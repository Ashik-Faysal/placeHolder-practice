import React from "react";
import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  const { name, id, phone, email } = user;
  return (
    <div>
      <div className="card w-96 bg-stone-400 text-neutral-content ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>
            <Link className="btn btn-accent" to={`/user/${id}`}>
              Show Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
