import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

const User = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {users.map((user) => (
        <SingleUser user={user} key={user.id} />
      ))}
    </div>
  );
};

export default User;
