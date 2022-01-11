import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonRequest } from '../services/redux/actions/pokemon';
import filteredPokemon from '../services/redux/selectors/filteredPokemon';


const usePokemon = (settings) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonRequest(settings));
    }, [settings]);

    const pokemon = useSelector(state => state.pokemon);
    const filters = useSelector(state => state.filters);

    const { data, isLoading, error } = pokemon;

    const filteredData = filteredPokemon(data, filters);

    return [filteredData, isLoading, error];
}


export default usePokemon;