import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import StoreContext from "../context/storeContext";
import articleDetails from "../styles/articleDetails.module.css";

export default function ArticleDetails() {
  const { blog } = useContext(StoreContext);
  const navigate = useNavigate();

  if (!blog) navigate("/article");

  const content = blog?.content?.split(" [")[0];

  return (
    <div className={articleDetails.container}>
      <i
        onClick={() => navigate("/article")}
        className="fa-solid fa-reply icon cursor"
      ></i>
      <h1 className={articleDetails.title}>{blog?.title}</h1>

      {/* author  */}
      <p className={articleDetails.author}>
        <i className={`fa-solid fa-user-secret ${""}`}></i>
        <span>{blog?.author}</span>
      </p>

      {/* image  */}
      <div className={articleDetails.imgContainer}>
        <LazyLoadImage
          className={articleDetails.image}
          src={blog?.urlToImage ? blog?.urlToImage : ""}
          placeholderSrc={logo}
          alt="blog image"
        />
      </div>

      {/* article details  */}
      <p className={articleDetails.details}>
        {content}{" "}
        <a href={blog?.url} target="_blank">
          See more
        </a>
      </p>
    </div>
  );
}
