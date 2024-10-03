import axios from "axios";
import React from "react";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { useContext } from "react";


export async function fetchPokemons(offset = 1, limit = 10) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const pokemonPromises = response.data.results.map(async pokemon => {
        const details = await axios.get(pokemon.url)
        return {
            name: pokemon.name,
            url: pokemon.url,
            types: details.data.types.map(typeInfo => typeInfo.type.name)
        }
    })
    return Promise.all(pokemonPromises)
}

export const PokemonList = ({ pokemonSearch }) => {
    const [pokes, setPokes] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        async function pokemonData() {
            const pokesData = await fetchPokemons(offset)
            setPokes(prevPokes => [...prevPokes, ...pokesData])
        }

        pokemonData()
    }, [offset])

    const addPokemon = async () => {
        setOffset(prevOffset => prevOffset + 10)
    }

    const { theme } = useContext(ThemeContext)

    const filteredPokes = pokemonSearch ? pokes.filter(poke => poke.types.some(type => type.toLowerCase().includes(pokemonSearch))) : pokes;

    return (
        <>
            <section>
                <StyledHeader>
                    {filteredPokes.map((poke, index) => {
                        const id = poke.url.split('/')[6]

                        return (
                            <div key={index} style={{padding: 20}}>
                                <StyledLink to={`./pokemon/${id}`} theme={theme}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={poke.name} />
                                    <h2>{poke.name}</h2>
                                </StyledLink>
                            </div>
                        )
                    })
                    }
                </StyledHeader>
            </section>
            <button onClick={addPokemon} style={{color: theme.color, background: theme.background, maxHeight: 100, borderWidth: 5, padding: '0px 10px'}}>Carregar mais...</button>
        </>
    )
}

PokemonList.propTypes = {
    pokemonSearch: PropTypes.string,
};

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-align: center;

    &:visited {
        color: ${({ theme }) => theme === themes.light ? 'purple' : theme.color};
    }

    &:hover {
        transition: ease-in-out 0.3s;
        font-size: 20px;
        color: darkblue;

        img {
            transform: scale(1.2);
            transition: transform 0.3s ease-in-out; 
        }
    }

    &:active {
        color: red;
    }
`