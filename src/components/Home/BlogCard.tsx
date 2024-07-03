import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { TArticle } from "../../Types";
import logo from "../../assets/logo.png";
import StoreContext from "../../context/storeContext";
import blogStyle from "../../styles/Article/blog.module.css";

export default function BlogCard({ blog }: { blog: TArticle }) {
  const { setBlog } = useContext(StoreContext);
  const navigate = useNavigate();

  const publishedDate = new Date(blog.publishedAt);
  const monthName = publishedDate.toLocaleString("default", { month: "long" });
  const date = publishedDate.getDate();

  const handleBlogDetails = () => {
    if (setBlog) {
      setBlog(blog);
      navigate(`/article/${blog.title}`);
    }
  };

  return (
    <div className={blogStyle.container}>
      {/*  blog content */}
      <div className={blogStyle.content}>
        <div className={blogStyle.blog}>
          {/* author  */}
          <p className={blogStyle.author}>
            <i
              className={`fa-solid fa-user-secret ${blogStyle.authorIcon}`}
            ></i>
            <span>{blog?.author}</span>
          </p>
          {/* title and description  */}
          <div onClick={handleBlogDetails} className="cursor">
            <h1>{blog?.title}</h1>
            <p className={blogStyle.description}>{blog?.description}</p>
          </div>
        </div>

        {/* blog footer  */}
        <div className={blogStyle.footer}>
          <div className={blogStyle.likePublish}>
            <i className="fa-solid fa-heart icon red"></i>
            <span className={blogStyle.date}>{`${monthName} ${date}`}</span>
          </div>
          <i className="fa-solid fa-floppy-disk icon gray"></i>
        </div>
      </div>

      {/* image/poster  */}
      <div className={blogStyle.imageContainer}>
        <LazyLoadImage
          src={blog?.urlToImage ? blog?.urlToImage : logo}
          placeholderSrc={logo}
          width={300}
          height={200}
          alt="blog image"
          effect="blur"
        />
      </div>
    </div>
  );
}
