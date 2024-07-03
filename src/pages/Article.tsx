import { useContext } from "react";
import BlogCard from "../components/Home/BlogCard";
import Search from "../components/Home/Search";
import StoreContext from "../context/storeContext";
import articleStyle from "../styles/Article/article.module.css";

export default function Home() {
  const { blogs } = useContext(StoreContext);

  return (
    <div className={articleStyle.container}>
      {/* search field  */}
      <div className={articleStyle.searchContainer}>
        <Search />
      </div>

      {/* article list  */}
      <div className={articleStyle.blogContainer}>
        {blogs?.map((blog) => (
          <BlogCard key={blog.title + blog.author} blog={blog} />
        ))}
      </div>
    </div>
  );
}
