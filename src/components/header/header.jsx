import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

export const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledHeader style={{ color: theme.color , background: theme.background }}>
            <h1>Pokedéx</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    padding: 20px;
    font-size: 50px;
    text-shadow: -5px 5px 0 #000000;
    border: 50px solid blue;
    border-radius: 10px;
    border-style: groove;
`