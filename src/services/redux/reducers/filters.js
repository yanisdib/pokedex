const initialState = { text: '', type: '', sortBy: 'desc' };


const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'filters/setFiltersRequested': return state;
        case 'filters/setFiltersSucceeded': return action.filters;
        case 'filters/setFiltersFailed': return state;
        default: return state;
    }
}


export default filtersReducer;