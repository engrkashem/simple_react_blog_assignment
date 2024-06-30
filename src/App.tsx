import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import StoreContext from "./context/storeContext";
import MainLayout from "./layout/MainLayout";

function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [category, setCategory] = useState("docker");

  const url = `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;

  const [data] = useFetch(url);
  const blogs = data?.articles;

  const contextData = {
    blogs,
    setPage,
    setPageSize,
    setCategory,
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
