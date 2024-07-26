import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";


export async function fetchPokemons(offset = 1, limit = 10) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    return response.data
}

export const PokemonList = ({ pokemonSearch }) => {
    const [pokes, setPokes] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        async function pokemonData() {
            const pokesData = await fetchPokemons(offset)
            setPokes(prevPokes => [...prevPokes, ...pokesData.results])
        }

        pokemonData()
    }, [offset])

    const addPokemon = async () => {
        setOffset(prevOffset => prevOffset + 10)
    }

    const { theme } = useContext(ThemeContext)

    const filteredPokes = pokes.filter(poke => poke.name.toLowerCase().includes(pokemonSearch))

    return (
        <>
            <section>
                <StyledHeader>
                    {filteredPokes.map((poke, index) => {
                        const id = poke.url.split('/')[6]

                        return (
                            <div key={index} style={{padding: 20}}>
                                <Link to={`./pokemon/${id}`}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={poke.name} />
                                    <h2>{poke.name}</h2>
                                </Link>
                            </div>
                        )
                    })
                    }

                    <button onClick={addPokemon} style={{color: theme.color, background: theme.background, maxHeight: 100, borderWidth: 5, padding: '0 10px'}}>Carregar mais...</button>
                </StyledHeader>
            </section>
        </>
    )
}

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

