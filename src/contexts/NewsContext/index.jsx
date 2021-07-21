import P from "prop-types";
import { NewsContext } from "./context";
import { useContext, useReducer, useRef } from "react";
import { newsReducer } from "./reducer";
import { data } from "./data";
import { actionFactory } from "./action-factory";

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, data);
  const actions = useRef(actionFactory(dispatch));

  return (
    <NewsContext.Provider value={[state, actions.current]}>
      {children}
    </NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: P.node.isRequired,
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);

  if (typeof context === "undefined") {
    throw new Error(
      "You have to use useNewsContext inside <NewsContext.Provider/>"
    );
  }
  // console.log("useNewsContext", context);
  return [...context];
};
