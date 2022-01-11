export default (pokemon, { text, type, sortBy }) => {
    return pokemon
        .filter((currentPokemon) => {
            const textMatch = currentPokemon.name.includes(text.toLowerCase());
            const typeMatch = currentPokemon.types.some(slot => slot.type.name.includes(type));

            return textMatch && typeMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'desc') return a.id - b.id;
            return b.id - a.id;
        });
}