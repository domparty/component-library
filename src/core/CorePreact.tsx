/* @jsx h */
import { h, createContext } from 'preact';
import { setPragma, extractCss as extractStyles } from 'goober';

// Here is the best spot to call it
setPragma(h);

const ctx = createContext({});

export const extractCss = () => extractStyles();

export const Provider = ({ value, children }) => {
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
