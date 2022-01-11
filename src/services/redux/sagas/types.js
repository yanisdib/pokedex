import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { fetchTypes } from '../../../api/pokemon';

import { fetchTypesSuccess, fetchTypesFailure } from '../actions/types';


function* fetchTypesSaga() {
    try {
        const types = yield call(fetchTypes);
        yield put(fetchTypesSuccess(types));
    }
    catch (error) {
        const newError = new Error(`Request failed. Please refresh the page.`);

        console.log(`ERROR ${error.code} : ${error.message}`);

        yield put(fetchTypesFailure(newError));
    }
}


export default function* typesSaga() {
    yield takeLatest('types/fetchTypesRequested', fetchTypesSaga);
}