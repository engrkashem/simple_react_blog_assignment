import { createContext } from "react";
import { TArticle } from "../Types";

type TInitialState = {
  blogs?: TArticle[];
  blog?: TArticle;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
  setBlog?: React.Dispatch<React.SetStateAction<TArticle | undefined>>;
};

const initialState: TInitialState = {
  blogs: [],
};

const StoreContext = createContext(initialState);

export default StoreContext;
