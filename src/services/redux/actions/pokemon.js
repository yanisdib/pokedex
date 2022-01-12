export const fetchPokemonRequest = (settings) => ({ type: 'pokemon/fetchPokemonRequested', settings })

export const fetchPokemonSuccess = ({ pokemon, pages }) => ({ type: 'pokemon/fetchPokemonSucceeded', pokemon, pages })

export const fetchPokemonFailure = (error) => ({ type: 'pokemon/fetchPokemonFailed', error })