import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Article from "../pages/Article";
import ArticleDetails from "../pages/ArticleDetails";
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
      {
        path: "article/:title",
        element: <ArticleDetails />,
      },
    ],
  },
]);

export default router;
