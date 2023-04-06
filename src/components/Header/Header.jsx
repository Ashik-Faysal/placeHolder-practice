import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between mx-24 p-4">
      <div>
        <Link to="/">
          <h1 className="text-6xl text-rose-300 font-bold">Ashik</h1>
        </Link>
      </div>
      <div className="flex gap-4 font-bold text-blue-600 text-xl items-center">
        <Link to="/post">Post</Link>
        <Link to="/user">User</Link>
        <Link to="/">Comment</Link>
      </div>
    </nav>
  );
};

export default Header;
