import { all, fork } from '@redux-saga/core/effects';

import pokemonSaga from './pokemon';
import typesSaga from './types';
import filtersSaga from './filters';


export default function* rootSaga() {
    yield all([
        fork(pokemonSaga),
        fork(typesSaga),
        fork(filtersSaga)
    ]);
}