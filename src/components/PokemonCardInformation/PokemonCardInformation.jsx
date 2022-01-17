import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setTypeColors } from '../../helpers/lib/setTypeColors';

import { ProgressBar, Tag } from '..';
import { Height, TextSnippet } from '@styled-icons/material-rounded';


const PokemonInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 65%;
    background-color: #ffffff;
    border-radius: 12px;
    column-gap: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

const Types = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    justify-content: center;
    margin: 85px 0 30px;
`;

const GeneralInfo = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    margin: 5px 0 20px;

    svg{
        height: 25px;
    }
`;

const Stats = styled.div`
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    column-gap: 20px;
    align-items: center;
    font-size: 0.95em;
    font-weight: 500;
    text-transform: uppercase;

    h4 {
        width: fit-content;
        color: ${({ color }) => color};
    }
`;


function PokemonCardInformation({ types, weight, height, abilities, stats }) {
    return (
        <PokemonInformation>
            <Wrapper>
                <Types>
                    {
                        types.map(current => {
                            const { color, background } = setTypeColors(current.type.name);
                            return <Tag color={color} background={background}>{current.type.name}</Tag>
                        })
                    }
                </Types>
                <GeneralInfo>
                    <div><TextSnippet /> {weight}kg</div>
                    <div><Height /> {height}m</div>
                    <div>
                        <ul>
                            {abilities.map(current => <li>{current.ability.name.replace('-', ' ')}</li>)}
                        </ul>
                    </div>
                </GeneralInfo>
                {
                    stats.map(stat => (
                        <Stats color={setTypeColors(types[0].type.name).background}>
                            <div>
                                <h4>
                                    {stat.stat.name}
                                </h4>
                            </div>
                            <div>{stat.base_stat}</div>
                            <ProgressBar
                                stats={stat.base_stat}
                                color={setTypeColors(types[0].type.name).background}
                            />
                        </Stats>
                    ))
                }
            </Wrapper>
        </PokemonInformation>
    );
}


PokemonCardInformation.propTypes = {
    types: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default PokemonCardInformation;