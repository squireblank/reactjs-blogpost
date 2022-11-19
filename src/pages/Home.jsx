import React, { useContext } from "react";
import PostItem from "../components/PostItem";
import BlogPostContext from "../contexts/BlogPostContext";

const Home = () => {
  const { posts, searchResults, fetchError, isLoading } =
    useContext(BlogPostContext);
  return (
    <main>
      {isLoading && <p className="loading-msg">Loading posts..</p>}
      {!isLoading && fetchError && <p className="error-msg">{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          searchResults.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <p className="no-post-msg">No Post to Display...</p>
        ))}
    </main>
  );
};

export default Home;
