import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import StoreContext from "./context/storeContext";
import MainLayout from "./layout/MainLayout";

function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const url = `https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=${pageSize}&apiKey=e5d9b2cb4ea54b348e2439e480fef515`;

  const [data] = useFetch(url);
  const blogs = data?.articles;

  const contextData = {
    blogs,
    setPage,
    setPageSize,
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
