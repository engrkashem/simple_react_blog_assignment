import { Link } from "react-router-dom";
import navStyle from "../styles/navbar.module.css";
export default function NavBar() {
  return (
    <nav className={navStyle.container}>
      <div>
        {/* <img width={50} height={50} src={logo} alt="Logo" /> */}
        <i className={`fa-solid fa-blog ${navStyle.icon}`}></i>
      </div>
      <div className="flexBox">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/article"}>
          Articles
        </Link>
      </div>
    </nav>
  );
}
