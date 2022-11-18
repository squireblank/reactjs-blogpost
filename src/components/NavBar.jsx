import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlogPostContext from "../contexts/BlogPostContext";

const NavBar = () => {
  const { search, setSearch } = useContext(BlogPostContext);
  return (
    <nav>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSearch("");
        }}
      >
        <label htmlFor="searchPosts">Search Posts</label>
        <input
          type="text"
          id="searchPosts"
          autoComplete="off"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
