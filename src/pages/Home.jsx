import React, { useContext } from "react";
import PostItem from "../components/PostItem";
import BlogPostContext from "../contexts/BlogPostContext";

const Home = () => {
  const { searchResults } = useContext(BlogPostContext);
  return (
    <main>
      {searchResults.length ? (
        searchResults.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p className="no-post-msg">No Post to Display...</p>
      )}
    </main>
  );
};

export default Home;
