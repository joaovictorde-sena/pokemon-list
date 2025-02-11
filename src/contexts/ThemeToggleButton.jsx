import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import styled from "styled-components"

function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
    );
}

const Button = styled.button`
  display: block;
  position: fixed;
  right: 0;
  padding: 12px;
  border-radius: 15px;
  margin: 3px;
`;

export default ThemeToggleButton;