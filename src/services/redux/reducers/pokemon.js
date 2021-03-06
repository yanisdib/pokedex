const initialState = { data: [], isLoading: true };


const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'pokemon/fetchPokemonRequested': return { ...state, isLoading: true };
        case 'pokemon/fetchPokemonSucceeded':
            return {
                ...state,
                data: action.pokemon,
                pages: action.pages,
                isLoading: false
            };
        case 'pokemon/fetchPokemonFailed':
            return { ...state, error: action.error };
        default: return state;
    }
}


export default pokemonReducer;