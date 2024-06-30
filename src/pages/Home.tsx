import { useContext } from "react";
import Search from "../components/Home/Search";
import StoreContext from "../context/storeContext";
import homeStyle from "../styles/Home/home.module.css";

export default function Home() {
  const contextData = useContext(StoreContext);
  console.log(contextData);
  return (
    <div>
      <div className={homeStyle.searchContainer}>
        <Search />
      </div>
    </div>
  );
}

// console.log(import.meta.env.VITE_NEWS_API_KEY);
