import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Article from "../pages/Article";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "article",
        element: <Article />,
      },
    ],
  },
]);

export default router;
