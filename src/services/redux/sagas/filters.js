import { put, takeLatest } from '@redux-saga/core/effects';

import { setFiltersFailure, setFiltersSuccess } from '../actions/filters';


function* setFiltersSaga({ filters }) {
    try {
        yield put(setFiltersSuccess(filters));
    } catch (error) {
        console.log(`ERRROR ${error.code}: ${error.message}`);
        yield put(setFiltersFailure());
    }
}

export default function* filtersSaga() {
    yield takeLatest('filters/setFiltersRequested', setFiltersSaga);
}