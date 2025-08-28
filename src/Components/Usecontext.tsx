import  { useState, createContext } from "react";
import type {ReactNode} from "react"
// 1. Define type for context
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// 2. Create context with default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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
