import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonRequest } from '../services/redux/actions/pokemon';


const usePokemon = (settings) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonRequest(settings));
    }, [settings]);

    const pokemon = useSelector(state => state.pokemon);
    const { data, isLoading, error } = pokemon;

    return [data, isLoading, error]; 
}


export default usePokemon;