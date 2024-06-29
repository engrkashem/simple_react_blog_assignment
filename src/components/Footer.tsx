import { Link } from "react-router-dom";
import footerStyle from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={footerStyle.container}>
      <i className={`fa-solid fa-blog ${footerStyle.logo}`}></i>
      <div className={footerStyle.content}>
        <div className={footerStyle.navContainer}>
          <Link to={"/"}>
            <i className={`fa-solid fa-house ${footerStyle.navIcon}`}></i>
          </Link>
          <Link to={"/article"}>
            <i className={`fa-solid fa-newspaper ${footerStyle.navIcon}`}></i>
          </Link>
        </div>
        <small className={footerStyle.text}>
          All right reserved to @kashem:{new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}
