import { TArticle } from "../../Types";
import logo from "../../assets/logo.png";
import blogStyle from "../../styles/Home/blog.module.css";

export default function BlogCard({ blog }: { blog: TArticle }) {
  console.log(blog);
  return (
    <div>
      {/* author  */}
      <p className={blogStyle.author}>
        <i className={`fa-solid fa-user-secret ${blogStyle.authorIcon}`}></i>
        <span>{blog?.author}</span>
      </p>
      {/*  blog content */}
      <div className={blogStyle.blog}>
        {/* title and description  */}
        <div>
          <h1>{blog?.title}</h1>
          <p>{blog?.description}</p>
        </div>

        {/* image/poster  */}
        <div className={blogStyle.imageContainer}>
          <img
            width={300}
            height={200}
            src={blog?.urlToImage ? blog?.urlToImage : logo}
            alt="blog image"
          />
        </div>
      </div>
    </div>
  );
}
