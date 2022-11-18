import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPostContext from "../contexts/BlogPostContext";
import Missing from "./Missing";

const EditPost = () => {
  const { posts, editPost } = useContext(BlogPostContext);
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const params = useParams();
  // console.log(params.id);

  useEffect(() => {
    const post = posts.find((post) => post.id === params.id);
    if (post) {
      settitle(post.title);
      setBody(post.body);
    }
  }, []);

  useEffect(() => {
    if (title.trim().length > 4 && body.trim().length > 5) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: params.id,
      title,
      body,
    };
    editPost(updatedPost);
    settitle("");
    setBody("");
  };

  return (
    <main>
      {title ? (
        <form className="add-post-form" onSubmit={handleSubmit}>
          <h3>Edit Post</h3>
          <div className="form-group">
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postBody">Body:</label>
            <textarea
              id="postBody"
              rows={"10"}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button className="btn btn-submit" disabled={!success}>
              Edit Post
            </button>
          </div>
        </form>
      ) : (
        <Missing />
      )}
    </main>
  );
};

export default EditPost;
