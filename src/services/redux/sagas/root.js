import { all, fork } from '@redux-saga/core/effects';

import pokemonSaga from './pokemon';
import typesSaga from './types';


export default function* rootSaga() {
    yield all([fork(pokemonSaga), fork(typesSaga)]);
}