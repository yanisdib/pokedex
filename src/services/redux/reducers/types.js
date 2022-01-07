const initialState = { data: [], isLoading: true };


const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'types/fetchTypesRequested': return state;
        case 'types/fetchTypesSucceeded':
            return {
                ...state,
                data: action.types,
                isLoading: false
            };
        case 'types/fetchTypesFailed':
            return { ...state, error: action.error };
        default: return state;
    }
}


export default typesReducer;