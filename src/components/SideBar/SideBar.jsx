import styled from 'styled-components';

import { SearchBar } from '..';

import pokeball from '../../assets/svg/pokeball.svg';


const Bar = styled.aside`
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 20vw;
    height: 100vh;   
    left: 15vw;
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
    background-color: #ff0000;
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


function SideBar() {
    return (
        <Bar>
            <Wrapper>
                <MenuHeader>
                    <Content>
                        <h2>What Pokémon<br />are you looking for?</h2>
                        <SearchBar placeholder='Search a Pokémon' />
                    </Content>
                </MenuHeader>
            </Wrapper>
        </Bar>
    );
}


export default SideBar;