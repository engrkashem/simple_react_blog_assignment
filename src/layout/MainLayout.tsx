import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import layoutStyle from "../styles/mainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={layoutStyle.container}>
      <NavBar />
      <div className={layoutStyle.contentContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
