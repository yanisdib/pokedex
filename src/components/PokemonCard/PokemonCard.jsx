import styled from 'styled-components';

import { PokemonCardInformation } from '..';

import background from '../../assets/images/bg_card.png';
import { setTypeColors } from '../../helpers/lib/setTypeColors';


const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    background-color: #ffffff;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    background-color: ${({ types }) => setTypeColors(types[0].type.name).background};
    background-image: url(${background});
    background-blend-mode: overlay;
    padding: 5px;
    border-radius: 15px;
`;


const PokemonImage = styled.img`
    display: flex;
    position absolute;
    width: 160px;
    top: 23%;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 999;
`;

const PokemonName = styled.h3`
    display: flex;
    position: absolute;
    width: 100%;
    top: 18%;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    color: #ffffff;
    text-shadow: -1px 3px 4px rgb(0 0 0 / 48%);
`;

const PokemonNumber = styled.h2`
    display: flex;
    position: absolute;
    width: 100%;
    top: 20%;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600px;
    font-size: 15em;
    color: #ffffff;
    opacity: 0.5;
`;


function PokemonCard({ selectedPokemon }) {

    const { id, name, sprites, types, stats, abilities, weight, height } = selectedPokemon;

    return (
        <Card>
            <Wrapper>
                <Content types={types}>
                    <PokemonNumber>{id}</PokemonNumber>
                    <PokemonName>{name}</PokemonName>
                    <PokemonImage src={sprites.other['official-artwork'].front_default} />
                    <PokemonCardInformation
                        types={types}
                        stats={stats}
                        abilities={abilities}
                        weight={weight}
                        height={height}
                    />
                </Content>
            </Wrapper>
        </Card>
    )
}

export default PokemonCard
