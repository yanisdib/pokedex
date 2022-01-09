import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { fetchTypes as fetchTypesData } from '../../../api/pokemon';

import {
    fetchTypesSuccess,
    fetchTypesFailure
} from '../actions/types';


function* fetchTypes() {
    try {
        const types = yield call(fetchTypesData);
        yield put(fetchTypesSuccess(types));
    }
    catch (error) {
        const newError = new Error(`Request failed. Please refresh the page.`);

        console.log(`ERROR ${error.code} : ${error.message}`);

        yield put(fetchTypesFailure(newError));
    }
}


export default function* typesSaga() {
    console.log('yes')
    yield takeLatest('types/fetchTypesRequested', fetchTypes);
}