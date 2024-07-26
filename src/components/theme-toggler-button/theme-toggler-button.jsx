import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Button } from "../button/button";
import { themes } from "../../contexts/theme-context";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
            <div style={{color: theme.color, background: theme.background}}>
                <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Alterar tema!</Button>
            </div>
    )
}