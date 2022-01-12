import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import usePokemon from '../../hooks/usePokemon';
import WithLoading from '../../helpers/hocs/withLoading';

import {
    Container,
    PokemonGrid,
    PokemonCardPreview,
    SideBar,
    LoadMoreButton
} from '../../components';


function Pokedex() {
    const [settings, setSettings] = useState({ offset: 0, limit: 12 });

    const [pokemon, isLoading, error] = usePokemon(settings);

    const LoadingPokemonGrid = WithLoading(PokemonGrid);

    return (
        <Container>
            <SideBar />
            <LoadingPokemonGrid isLoading={isLoading}>
                {
                    pokemon.map(current =>
                        <PokemonCardPreview
                            key={uuidv4()}
                            name={current.name}
                            number={current.id}
                            sprite={current.sprites.versions['generation-v']['black-white'].animated.front_default}
                            types={current.types}
                        />
                    )
                }
                <LoadMoreButton
                    isLoading={isLoading}
                    onClick={() => setSettings({ ...settings, limit: settings.limit + 12 })}
                />
            </LoadingPokemonGrid>
        </Container>
    );
}


export default Pokedex;