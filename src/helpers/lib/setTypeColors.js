const types = {
    normal: {
        color: '#48526b',
        background: '#a9c2cd'
    },
    fighting: {
        color: '#50251c',
        background: '#bb3b39'
    },
    fire: {
        color: '#9b1a00',
        background: '#f37517'
    },
    grass: {
        color: '#345a21',
        background: '#78c850'
    },
    water: {
        color: '#0030a3',
        background: '#6890f0'
    },
    steel: {

        color: '#787887',
        background: '#b8b8d0'
    },
    ground: {
        color: '#927d44',
        background: '#e0c068'
    },
    poison: {
        color: '#4b2172',
        background: '#a086ff'
    },
    bug: {
        color: '#124f04',
        background: '#cdf083'
    },
    flying: {
        color: '#4c25c7',
        background: '#c6b7f5'
    },
    rock: {
        color: '#786824',
        background: '#d1c17d'
    },
    ghost: {
        color: '#705898',
        background: '#a292bc'
    },
    electric: {
        color: '#a1871f',
        background: '#f8d030'
    },
    psychic: {
        color: '#a13959',
        background: '#fa92b2'
    },
    ice: {
        color: '#638d8d',
        background: '#98d8d8'
    },
    dragon: {
        color: '#3b0ea9',
        background: '#8350ff'
    },
    dark: {
        color: '#705848',
        background: '#a29288'
    },
    fairy: {
        color: '#9b6470',
        background: '#f4bdc9'
    },
    unknown: {
        color: '#68a090',
        background: '#9dc1b7'
    },
    shadow: {
        color: '#7863a3',
        background: '#3d2f58'
    }
};

export const setTypeColors = (typeName) => {
    for (const type in types) {
        if (type === typeName) return types[type];
    }
}