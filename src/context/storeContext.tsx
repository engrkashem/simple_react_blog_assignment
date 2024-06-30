import { createContext } from "react";

type TInitialState = {
  blogs: object[];
};

const initialState: TInitialState = {
  blogs: [],
};

const StoreContext = createContext(initialState);

export default StoreContext;
