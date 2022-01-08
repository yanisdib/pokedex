export const fetchTypesRequest = () => ({ type: 'pokemon/fetchTypesRequested' })
export const fetchTypesSuccess = (types) => ({ type: 'pokemon/fetchTypesSucceeded', types })
export const fetchTypesFailure = (error) => ({ type: 'pokemon/fetchTypesFailed', error })