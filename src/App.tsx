import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { TArticle } from "./Types";
import StoreContext from "./context/storeContext";
import MainLayout from "./layout/MainLayout";

function App() {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [category, setCategory] = useState<string>("docker");
  const [blog, setBlog] = useState<TArticle | undefined>(undefined);

  const url = `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;

  const [data] = useFetch(url);
  const blogs = data?.articles;

  const contextData = {
    blogs,
    blog,
    setPage,
    setPageSize,
    setCategory,
    setBlog,
  };

  return (
    <div className="container">
      <StoreContext.Provider value={contextData}>
        <MainLayout />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
