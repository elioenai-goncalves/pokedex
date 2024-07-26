import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledHeader>
            <button {...props} 
                style={{color: theme.color, background: theme.background, borderWidth: 5, padding: 10}}
            />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    padding: 30px;
`