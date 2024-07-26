import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonDetails } from "../../components/pokemon/pokemon";

export const PokeDetails = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ color: theme.color, background: theme.background }}>
            <PokemonDetails />
        </div>
    )
}