import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonRequest } from '../services/redux/actions/types';


const usePokemon = (settings = { offset = 0, limit = 12 }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonRequest(settings));
    }, [settings]);

    const pokemon = useSelector(state => state.pokemon);
    const { data, isLoading } = pokemon;

    return [data, isLoading];
}


export default usePokemon;