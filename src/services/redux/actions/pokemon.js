export const fetchPokemonRequest = (settings) => ({ type: 'pokemon/fetchPokemonRequested', settings })
export const fetchPokemonSuccess = (pokemon) => ({ type: 'pokemon/fetchPokemonSucceeded', pokemon })
export const fetchPokemonFailure = (error) => ({ type: 'pokemon/fetchPokemonFailed', error })