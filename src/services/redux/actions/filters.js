export const setFiltersRequest = (filters) => ({ type: 'filters/setFiltersRequested', filters });

export const setFiltersSuccess = (filters) => ({ type: 'filters/setFiltersSucceeded', filters });

export const setFiltersFailure = () => ({ type: 'filters/setFiltersFailed' });