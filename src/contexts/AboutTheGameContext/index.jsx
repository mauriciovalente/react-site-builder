import P from "prop-types";
import { AboutTheGameContext } from "./context";
import { useContext, useReducer, useRef } from "react";
import { aboutTheGameReducer } from "./reducer";
import { data } from "./data";
import { actionFactory } from "./action-factory";

export const AboutTheGameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(aboutTheGameReducer, data);
  const actions = useRef(actionFactory(dispatch));

  return (
    <AboutTheGameContext.Provider value={[state, actions.current]}>
      {children}
    </AboutTheGameContext.Provider>
  );
};

AboutTheGameProvider.propTypes = {
  children: P.node.isRequired,
};

export const useAboutTheGameContext = () => {
  const context = useContext(AboutTheGameContext);

  if (typeof context === "undefined") {
    throw new Error(
      "You have to use useAboutTheGameContext inside <AboutTheGameContext.Provider/>"
    );
  }
  // console.log("useAboutTheGameContext", context);
  return [...context];
};
