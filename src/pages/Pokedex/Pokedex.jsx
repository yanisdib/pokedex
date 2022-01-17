import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { usePokemon, useModal } from '../../hooks';

import WithLoading from '../../helpers/hocs/withLoading';

import {
    Container,
    PokemonGrid,
    PokemonCardPreview,
    SideBar,
    LoadMoreButton,
    Modal,
    PokemonCard
} from '../../components';


function Pokedex() {
    const [settings, setSettings] = useState({ offset: 0, limit: 12 });
    const [selectedPokemon, setSelectedPokemon] = useState('');

    const [pokemon, isLoading, error] = usePokemon(settings);

    const [isModalDisplayed, setModal] = useModal();

    const LoadingPokemonGrid = WithLoading(PokemonGrid);

    const onPokemonCardPreviewClick = (event) => {
        let selected = event.currentTarget.dataset.pokemon;
        
        selected = pokemon.find(currentPokemon => currentPokemon.name === selected);

        setSelectedPokemon(selected);
        setModal();
    }

    return (
        <>
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
                                onThumbnailClick={onPokemonCardPreviewClick}
                            />
                        )
                    }
                    <LoadMoreButton
                        isLoading={isLoading}
                        onClick={() => setSettings({ ...settings, limit: settings.limit + 12 })}
                    />
                </LoadingPokemonGrid>
            </Container>
            {
                isModalDisplayed && (
                    <Modal onDismiss={setModal}>
                        <PokemonCard selectedPokemon={selectedPokemon} />
                    </Modal>
                )
            }
        </>
    );
}


export default Pokedex;