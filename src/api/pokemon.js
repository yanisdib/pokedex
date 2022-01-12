import axios from 'axios';


const API_RESPONSE_TYPE = 'json';
const API_HEADERS = { "Content-type": "application/json;charset=UTF-8" };


/**
 * Fetch a limited set of Pokemon and their basic information (name and URL)
 * @param {*} param0 object with offset and limit properties
 * @returns an object containing an array of pokemon and an object of pages
 */
export const fetchPokemon = async ({ offset, limit }) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    let response = await axios({
        method: 'get',
        url,
        responseType: API_RESPONSE_TYPE,
        headers: API_HEADERS
    });

    response = await response.data;

    const { previous, next } = response;
    const pages = { previous, next }; // URL of previous and next pokemon results

    let pokemon = await Promise.all(
        response?.results.map(result => fetchPokemonByURL(result?.url))
    );


    return { pokemon, pages };
}


/**
 * Fetch a Pokemon's data from its API URL
 * @param {*} url 
 * @returns an object with a specific Pokemon data
 */
const fetchPokemonByURL = async (url) => {
    let response = await axios({
        method: 'get',
        url,
        responseType: API_RESPONSE_TYPE,
        headers: API_HEADERS
    });

    response = await response.data;

    return response;
}


/**
 * Fetch every existing type and its basic information
 * @returns an array of objects with every existing type's name and URL
 */
export const fetchTypes = async () => {
    const url = 'https://pokeapi.co/api/v2/type';

    const response = await axios({
        method: 'get',
        url,
        responseType: API_RESPONSE_TYPE,
        headers: API_HEADERS
    });

    const types = await response.data.results;

    return types;
}