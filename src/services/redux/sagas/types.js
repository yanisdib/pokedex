import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { fetchTypesData } from '../../../api/pokemon';

import {
    fetchTypesSuccess,
    fetchTypesFailure
} from '../actions/pokemon';


function* fetchTypes() {
    try {
        const types = yield call(fetchTypesData);
        yield put(fetchTypesSuccess(types));
    }
    catch (error) {
        const newError = new Error(`Couldn't Types has failed. Please refresh the page.`);

        console.log(`ERROR ${error.code} : ${error.message}`);

        yield put(fetchTypesFailure(newError));
    }
}


export default function* typesSaga() {
    yield takeLatest('types/fetchTypesRequest', fetchTypes);
}