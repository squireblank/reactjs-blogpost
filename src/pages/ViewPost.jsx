import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import BlogPostContext from "../contexts/BlogPostContext";
import Card from "../shared/Card";
import Missing from "./Missing";

const ViewPost = () => {
  const { posts, deletePost } = useContext(BlogPostContext);
  const params = useParams();
  const post = posts.find((post) => post.id === params.id);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      deletePost(id);
    }
  };

  return (
    <main>
      {post ? (
        <>
          <Card classes="post-item post-fullview">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.datetime}</p>
            <p className="post-body">{post.body}</p>
          </Card>
          <div className="buttons">
            <Link to={`/edit/${post.id}`}>
              <button className="btn btn-edit">Edit Post</button>
            </Link>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </div>
        </>
      ) : (
        <Missing />
      )}
    </main>
  );
};

export default ViewPost;
