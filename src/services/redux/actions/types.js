export const fetchTypesRequest = (params) => ({ type: 'pokemon/fetchTypesRequested', params })
export const fetchTypesSuccess = (types) => ({ type: 'pokemon/fetchTypesSucceeded', types })
export const fetchTypesFailure = (error) => ({ type: 'pokemon/fetchTypesFailed', error })