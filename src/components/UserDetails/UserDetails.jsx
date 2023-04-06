import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate;

  // console.log(user);
  return (
    <div className="my-center">
      <div className="card w-96 h-full bg-stone-400 text-neutral-content ">
        <div className="card-body items-center text-center">
          <h1 className="text-6xl text-stone-300 font-bold">Id: {user.id}</h1>
          <h2 className="card-title">{user.name}</h2>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
          {/* <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-warning"
          >
            Go Back
          </button> */}
          <Link className="btn btn-error" to={"/user"}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
