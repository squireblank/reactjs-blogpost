import { Route, Routes } from "react-router-dom";
import { BlogPostProvider } from "./contexts/BlogPostContext";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import NewPost from "./pages/NewPost";
import ViewPost from "./pages/ViewPost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <BlogPostProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<ViewPost />} />
          </Route>
          <Route path="edit">
            <Route path=":id" element={<EditPost />} />
          </Route>
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BlogPostProvider>
  );
};

export default App;
