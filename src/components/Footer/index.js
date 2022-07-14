import React from "react";
import { useThemeApp } from "../../hooks/theme";

import { Container } from "./styles";

export default function Footer() {
  const { theme, handleToggleTheme } = useThemeApp();

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
