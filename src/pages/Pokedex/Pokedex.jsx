import { useState } from 'react';
import { Container, SideBar } from '../../components';

import usePokemon from '../../hooks/usePokemon';
import usePokemonTypes from '../../hooks/usePokemonTypes';


function Pokedex() {
    const [settings, setSettings] = useState({ offset: 0, limit: 12 });

    const types = usePokemonTypes();

    return (
        <Container>
            <SideBar />
            <p>oh</p>
        </Container>
    );
}


export default Pokedex;