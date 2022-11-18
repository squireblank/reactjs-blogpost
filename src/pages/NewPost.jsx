import React, { useContext, useEffect, useState } from "react";
import BlogPostContext from "../contexts/BlogPostContext";

const NewPost = () => {
  const { addPost } = useContext(BlogPostContext);
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (title.trim().length > 4 && body.trim().length > 5) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
    };
    addPost(newPost);
    settitle("");
    setBody("");
  };

  return (
    <main>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <h3>Add a New Post</h3>
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
            Add Post
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewPost;
