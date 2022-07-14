import React from "react";
import { useHistory } from "react-router-dom";
import { useThemeApp } from "../../hooks/theme";
import { Container } from "./styles";

export default function Header() {
  const history = useHistory();
  const { theme, handleToggleTheme } = useThemeApp();

  console.log(history);

  function handleNavigate() {
    history.push("/");
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleToggleTheme}>
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
      <button style={{ color: "#fff" }} onClick={handleNavigate}>
        Voltar para a home
      </button>
    </Container>
  );
}
