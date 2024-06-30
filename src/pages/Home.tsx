import { useContext } from "react";
import StoreContext from "../context/storeContext";

export default function Home() {
  const contextData = useContext(StoreContext);
  // console.log(contextData);
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
}

// console.log(import.meta.env.VITE_NEWS_API_KEY);
