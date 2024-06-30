import { createContext } from "react";
import { TArticle } from "../Types";

type TInitialState = {
  blogs?: TArticle[];
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
};

const initialState: TInitialState = {
  blogs: [],
};

const StoreContext = createContext(initialState);

export default StoreContext;
