import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleComment from "../SingleComment/SingleComment";

const Comment = () => {
  const comments = useLoaderData();
  // console.log(comments)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comment;
