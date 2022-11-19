import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "../api/posts";
import useAxiosFetch from "../hooks/useAxiosFetch";

const BlogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const addPost = async (newPost) => {
    newPost.id = uuidv4();
    newPost.datetime = format(new Date(), "PPPP pppp");
    try {
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(`Error: ${err.messgae}`);
      }
    }
  };

  const editPost = async (updatedPost) => {
    updatedPost.datetime = format(new Date(), "PPPP pppp");
    try {
      const response = await api.put(`/posts/${updatedPost.id}`, updatedPost);
      setPosts(
        posts.map((post) =>
          post.id === updatedPost.id ? { ...response.data } : post
        )
      );
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(`Error: ${err.messgae}`);
      }
    }
  };

  const deletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      } else {
        console.log(`Error: ${err.messgae}`);
      }
    }
  };

  return (
    <BlogPostContext.Provider
      value={{
        posts,
        addPost,
        editPost,
        deletePost,
        searchResults,
        search,
        setSearch,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </BlogPostContext.Provider>
  );
};

export default BlogPostContext;
