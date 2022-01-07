import axios from 'axios';


const API_RESPONSE_TYPE = 'json';
const API_HEADERS = { "Content-type": "application/json;charset=UTF-8" };


/**
 * Fetch a limited set of Pokemon and their basic information (name and URL)
 * @param {*} param0 object with offset and limit properties
 * @returns an array of nested objects containing all fetched Pokemon data
 */
export const fetchPokemonURL = async ({ offset, limit }) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const response = await axios({
        method: 'get',
        url,
        responseType: API_RESPONSE_TYPE,
        headers: API_HEADERS
    });

    response = await response.data;
    const pokemon = await Promise.all(
        response?.results.map(result => fetchPokemonData(result?.url))
    );

    return pokemon;
}


/**
 * Fetch a Pokemon's data from its API URL
 * @param {*} url 
 * @returns an object with a specific Pokemon data
 */
const fetchPokemonData = async (url) => {
    const response = await axios({
        method: 'post',
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
export const fetchTypesData = async () => {
    const url = 'https://pokeapi.co/api/v2/type';

    const response = await axios({
        method: 'post',
        url,
        responseType: API_RESPONSE_TYPE,
        headers: API_HEADERS
    });

    const types = await response.data.results;

    return types;
}