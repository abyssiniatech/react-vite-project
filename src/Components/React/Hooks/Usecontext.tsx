
// import React, { useState,ReactNode } from "react";
// import { ThemeContext } from "./ThemeContext";
// export type ThemeContextType = {
//   theme: "light" | "dark";
//   toggleTheme: () => void;
// };

// type Props = {
//   children: ReactNode;
// };

// export const ThemeProvider: React.FC<Props> = ({ children }) => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



import React, { useState } from "react";
import type { ReactNode } from "react"; // <-- type-only import
import { ThemeContext } from "./ThemeContext"; // <-- update path as needed
export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
