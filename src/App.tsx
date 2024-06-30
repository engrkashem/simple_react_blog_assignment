import useFetch from "./Hooks/useFetch";
import StoreContext from "./context/storeContext";
import MainLayout from "./layout/MainLayout";

function App() {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=e5d9b2cb4ea54b348e2439e480fef515`;

  const [data] = useFetch(url);
  console.log(data);

  const blogs = [
    {
      id: 1,
      content: "abc",
    },
  ];
  return (
    <div className="container">
      <StoreContext.Provider value={{ blogs: blogs }}>
        <MainLayout />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
