import { useContext } from "react";
import BlogCard from "../components/Home/BlogCard";
import Search from "../components/Home/Search";
import StoreContext from "../context/storeContext";
import homeStyle from "../styles/Home/home.module.css";

export default function Home() {
  const { blogs } = useContext(StoreContext);

  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.searchContainer}>
        <Search />
      </div>
      <div className={homeStyle.blogContainer}>
        {blogs?.map((blog) => (
          <BlogCard key={blog.title + blog.author} blog={blog} />
        ))}
      </div>
    </div>
  );
}
