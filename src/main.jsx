import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import Comment from "./components/Comment/Comment";
import CommentDetails from "./components/CommentDetails/CommentDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import PostDetails from "./components/PostDetails/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/post",
        element: <Post />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postId",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/user",
        element: <User />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "/",
        element: <Comment />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
      },
      {
        path: "/comment/:commentId",
        element: <CommentDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
