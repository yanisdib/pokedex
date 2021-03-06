import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import usePokemonTypes from '../../hooks/usePokemonTypes';
import useFormField from '../../hooks/useFormField';

import WithLoading from '../../helpers/hocs/withLoading';
import { setTypeColors } from '../../helpers/lib/setTypeColors';

import { setFiltersRequest } from '../../services/redux/actions/filters';

import { SearchBar, Tag } from '..';

import logo from '../../assets/images/logo.png';
import pokeball from '../../assets/svg/pokeball.svg';


const Bar = styled.aside`
    /* Landscape phones and down */
    @media (min-width: 320px) { 
        display: flex;
        flex-direction: row;
        width: 90vw;
        height: auto;
        z-index: 999;
    }

    /* Landscape phone to portrait tablet */
    @media (max-width: 480px) { 
        display: flex;
        flex-direction: row;
        width: 90vw;
        height: auto;
        z-index: 999;
    }

    /* Portrait tablet to landscape and desktop */
    @media (min-width: 768px) { 
        display: flex;
        flex-direction: row;
        width: 90vw;
        height: auto;
        z-index: 999; 
    }

    /* Large desktop */
    @media (min-width: 1200px) { 
        display: flex;
        flex-direction: row;
        position: fixed;
        width: 20vw;
        height: auto;
        top: 0;
        left: 15vw;
        z-index: 999; 
    }
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
    background-color: #d10000;
    background-image: url(${pokeball});
    background-repeat: no-repeat;
    background-position: 13vw -60px; 
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
    margin: 20px 0;
`;


function SideBar() {
    const dispatch = useDispatch();

    const [types, isLoading] = usePokemonTypes();

    const [selectedType, setSelectedType] = useState('');
    const [searchText, setSearchText] = useFormField('');
    const [sortBy, setSortBy] = useState('desc');


    const LoadingTypeTags = WithLoading(TypeTags);

    useEffect(() => {
        dispatch(setFiltersRequest({ text: searchText, type: selectedType, sortBy }));
    }, [
        searchText,
        selectedType,
        sortBy
    ]);

    return (
        <Bar>
            <Wrapper>
                <MenuHeader>
                    <Content>
                        <img src={logo} width='150' />
                        <h2>What Pok??mon<br />are you looking for?</h2>
                        <SearchBar
                            value={searchText}
                            placeholder='Search a Pok??mon'
                            onChange={setSearchText}
                        />
                    </Content>
                </MenuHeader>
                <br />
                <h4>POKEMON TYPES</h4>
                <LoadingTypeTags isLoading={isLoading}>
                    <Tag
                        key={uuid()}
                        color="#000000"
                        background="#bfbfbf"
                        onClick={() => setSelectedType('')}
                    >
                        All
                    </Tag>
                    {
                        types.map(type => {
                            const { color, background } = setTypeColors(type.name);

                            return (
                                <Tag
                                    key={uuid()}
                                    color={color}
                                    background={background}
                                    onClick={(event) => setSelectedType(event.target.innerText.toLocaleLowerCase())}
                                >
                                    {type.name}
                                </Tag>
                            );
                        })
                    }
                </LoadingTypeTags>
            </Wrapper>
        </Bar >
    );
}


export default SideBar;