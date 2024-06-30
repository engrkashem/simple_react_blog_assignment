import searchStyle from "../../styles/Home/search.module.css";

export default function Search() {
  return (
    <div className={searchStyle.container}>
      <input
        className={searchStyle.searchField}
        type="text"
        name="search"
        id="search"
        placeholder="Search"
      />

      <i
        className={`fa-solid fa-magnifying-glass ${searchStyle.searchIcon}`}
      ></i>
    </div>
  );
}
