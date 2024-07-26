import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonList } from "../../components/pokemons/pokemons";

export const Pokedex = () => {
    const { theme } = useContext(ThemeContext)
    const [pokemonSearch, setPokemonSearch] = useState('')

    const handleSearchChange = (e) => {
        setPokemonSearch(e.target.value.toLowerCase())
    }

    return (
        <div style={{ color: theme.color, background: theme.background }}>
            <input type="search" name="pokemonSearch" id="pkmSearch" placeholder="Procure o Pokémon aqui:" onChange={handleSearchChange}/>
            <PokemonList pokemonSearch={pokemonSearch}/>
        </div>
    )
}