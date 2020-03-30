import React, { createContext } from "react";
import { setPragma, extractCss as extractStyles } from "goober";

// Here is the best spot to call it
setPragma(React.createElement);

const ctx = createContext({});

export const extractCss = () => extractStyles();

export const Provider = ({ value, children }) => {
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
