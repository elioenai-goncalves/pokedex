import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export async function fetchPokemon(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return response.data
}

export async function fetchAbility(url) {
    const response = await axios.get(url)
    return response.data
}

export const PokemonDetails = () => {
    const [poke, setPoke] = useState({ moves: [], abilities: [], types: [] })
    const { id } = useParams()

    useEffect(() => {
        async function pokemonData() {
            const pokeData = await fetchPokemon(id)

            const abilitiesData = await Promise.all(
                pokeData.abilities.map(async (ability) => {
                    const abilityDetails = await fetchAbility(ability.ability.url)
                    return {
                        name: ability.ability.name,
                        effect_entries: abilityDetails.effect_entries
                    }
                })
            )

            setPoke({
                ...pokeData,
                abilities: abilitiesData
            })
        }
        pokemonData()
    }, [id])

    return (
        <>
            <section>
                <Link to='/'>Voltar para Pokedéx!</Link>
                <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={poke.name} />
                    <h2>{poke.name}</h2>
                    <h3>Movimentos:</h3>
                    <ul>
                        {poke.moves.map((move, index) => (
                            <li key={index}>{move.move.name}</li>
                        ))}
                    </ul>
                    <h3>Habilidades:</h3>
                    <ul>
                        {poke.abilities.map((ability, index) => (
                            <li key={index}>
                                {ability.name}
                                <ul>
                                    {ability.effect_entries.map((effect, effectIndex) => (
                                        <li key={effectIndex}>{effect.effect}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h3>Tipo:</h3>
                    <ul>
                        {poke.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}



