import { useContext, useState } from "react";
import StoreContext from "../../context/storeContext";
import searchStyle from "../../styles/Home/search.module.css";

export default function Search() {
  // local state
  const [searchText, setSearchText] = useState("");

  // context set state function by useContext hooks
  const { setCategory } = useContext(StoreContext);

  // search box submit handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if setCategory function available in the context store
    if (setCategory) {
      setCategory(searchText);
    }

    // setting search text empty to reset search box after submit
    setSearchText("");
  };

  return (
    <form className={searchStyle.container} onSubmit={handleSearch}>
      {/* search input field  */}
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className={searchStyle.searchField}
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchText}
      />
      {/* search icon  */}
      <i
        className={`fa-solid fa-magnifying-glass ${searchStyle.searchIcon}`}
      ></i>
    </form>
  );
}
