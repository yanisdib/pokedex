export const fetchTypesRequest = () => ({ type: 'types/fetchTypesRequested' })
export const fetchTypesSuccess = (types) => ({ type: 'types/fetchTypesSucceeded', types })
export const fetchTypesFailure = (error) => ({ type: 'types/fetchTypesFailed', error })