import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import usePokemonTypes from '../../hooks/usePokemonTypes';

import WithLoading from '../../helpers/hocs/withLoading';
import { setTypeColors } from '../../helpers/lib/setTypeColors';

import { SearchBar, Tag } from '..';

import logo from '../../assets/images/logo.png';
import pokeball from '../../assets/svg/pokeball.svg';


const Bar = styled.aside`
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 20vw;
    height: 100vh;
    top: 0;
    left: 15vw;
    z-index: 999;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;  
`;

const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    height: 30%;
    background-color: #d10000;
    background-image: url(${pokeball});
    background-repeat: no-repeat;
    background-position: 13vw -60px; 
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 10px; 

    h2 {
        align-self: flex-start;
        padding: 10px; 
        color: #ffffff;
    }
`;

const TypeTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 15px;
    align-items: center;
    justify-content: flex-start;
    margin: 50px 0;
`;


function SideBar() {
    const [types, isLoading] = usePokemonTypes();

    const LoadingTypeTags = WithLoading(TypeTags);

    return (
        <Bar>
            <Wrapper>
                <MenuHeader>
                    <Content>
                        <img src={logo} width='150' />
                        <h2>What Pokémon<br />are you looking for?</h2>
                        <SearchBar placeholder='Search a Pokémon' />
                    </Content>
                </MenuHeader>
                <LoadingTypeTags isLoading={isLoading}>
                    {
                        types.map(type => {
                            const { color, background } = setTypeColors(type.name);

                            return (
                                <Tag
                                    key={uuid()}
                                    color={color}
                                    background={background}
                                >
                                    {type.name}
                                </Tag>
                            );
                        })
                    }
                </LoadingTypeTags>
            </Wrapper>
        </Bar>
    );
}


export default SideBar;