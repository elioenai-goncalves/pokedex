import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const themes = {
    light: {
        color: 'rgb(59, 75, 255)',
        background: 'yellow',
    },
    dark: {
        color: '#ffffff',
        background: '#000000',
    }
}


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};