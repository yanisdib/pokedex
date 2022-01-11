import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { fetchPokemon } from '../../../api/pokemon';

import { fetchPokemonSuccess, fetchPokemonFailure } from '../actions/pokemon';


function* fetchPokemonSaga({ settings }) {
    try {
        const pokemon = yield call(fetchPokemon, settings);
        yield put(fetchPokemonSuccess(pokemon));
    }
    catch (error) {
        const newError = new Error('Request failed. Please refresh the page.');

        console.log(`ERROR ${error.code} : ${error.message}`);

        yield put(fetchPokemonFailure(newError));
    }
}


export default function* pokemonSaga() {
    yield takeLatest('pokemon/fetchPokemonRequested', fetchPokemonSaga);
}