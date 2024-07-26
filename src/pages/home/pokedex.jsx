import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonList } from "../../components/pokemons/pokemons";
import styled from "styled-components";

export const Pokedex = () => {
    const { theme } = useContext(ThemeContext)
    const [pokemonSearch, setPokemonSearch] = useState('')
    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        async function fetchPokemonsTypes() {
            const response = await axios.get('https://pokeapi.co/api/v2/type')
            setPokemonTypes(response.data.results)
        }

        fetchPokemonsTypes()
    }, [])

    const handleSearchChange = (e) => {
        setPokemonSearch(e.target.value.toLowerCase())
    }

    return (
        <div style={{ color: theme.color, background: theme.background }}>
                <StyledSelect theme={theme} name="pokemonSearch" onChange={handleSearchChange} value={pokemonSearch}>
                    <option value="">Procure o tipo do Pokémon aqui:</option>
                    {pokemonTypes.map((type) => (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    ))}
                </StyledSelect>
            <PokemonList pokemonSearch={pokemonSearch} />
        </div>
    )
}

const StyledSelect = styled.select`
    color: ${({theme}) => theme.color};
    background: ${({theme}) => theme.background};
    border: 5px solid black;
`