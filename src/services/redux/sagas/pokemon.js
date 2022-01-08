import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { fetchPokemon as fetchPokemonData } from '../../../api/pokemon';

import {
    fetchPokemonSuccess,
    fetchPokemonFailure
} from '../actions/pokemon';


function* fetchPokemon({ settings }) {
    try {
        const pokemon = yield call(fetchPokemonData, settings);
        yield put(fetchPokemonSuccess(pokemon));
    }
    catch (error) {
        const newError = new Error('Request failed. Please refresh the page.');

        console.log(`ERROR ${error.code} : ${error.message}`);

        yield put(fetchPokemonFailure(newError));
    }
}


export default function* pokemonSaga() {
    yield takeLatest('pokemon/fetchPokemonRequested', fetchPokemon); 
}