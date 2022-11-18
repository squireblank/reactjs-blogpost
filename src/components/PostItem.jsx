import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

const PostItem = ({ post }) => {
  return (
    <Card classes="post-item">
      <h2 className="post-title">
        <Link to={`post/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="post-date">{post.datetime}</p>
      <p className="post-body">
        {post.body.trim().length < 20
          ? post.body
          : `${post.body.slice(0, 20)}...`}
      </p>
    </Card>
  );
};

export default PostItem;
