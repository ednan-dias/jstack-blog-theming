import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export function useThemeApp() {
  const context = useContext(ThemeContext);
  return context;
}
