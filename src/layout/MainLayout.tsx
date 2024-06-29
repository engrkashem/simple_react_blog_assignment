import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav>nav bar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
