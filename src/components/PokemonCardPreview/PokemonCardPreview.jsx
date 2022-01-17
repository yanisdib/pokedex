import { Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { setTypeColors } from '../../helpers/lib/setTypeColors';

import { Spinner, Tag } from '..';


const CardPreview = styled.div`
    /* Landscape phones and down */
    @media (min-width: 320px) { 
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 45vw;
        height: 40vh;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #00000026;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        webkit-box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
        box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
    }

    /* Landscape phone to portrait tablet */
    @media (max-width: 480px) { 
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 45vw;
        height: 40vh;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #00000026;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        webkit-box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
        box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
    }

    /* Portrait tablet to landscape and desktop */
    @media (min-width: 768px) { 
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 28vw;
        height: 30vh;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #00000026;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        webkit-box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
        box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
    }

    /* Large desktop */
    @media (min-width: 1200px) { 
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        width: 15vw;
        height: 30vh;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #00000026;
        align-items: center;
        padding: 30px 0;
        webkit-box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
        box-shadow: 0px 4px 14px 0px rgb(110 110 110 / 38%);
    }
`;

const Thumbnail = styled.div`
    img {
        position: absolute;
        margin: 0 auto;
    }

    /* Landscape phones and down */
    @media (min-width: 320px) { 
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 4.5rem;
        font-weight: 600;
        color: #ff9ebe6b;
        cursor: pointer;
    }

    /* Landscape phone to portrait tablet */
    @media (max-width: 480px) { 
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 4.5rem;
        font-weight: 600;
        color: #ff9ebe6b;
        cursor: pointer;
    }

    /* Portrait tablet to landscape and desktop */
    @media (min-width: 768px) { 
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 8rem;
        font-weight: 600;
        color: #ff9ebe6b;
        cursor: pointer;
    }

    /* Large desktop */
    @media (min-width: 1200px) { 
        display: flex;
        position: relative;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 8rem;
        font-weight: 600;
        color: #ff9ebe6b;
        cursor: pointer;
    }
`;

const Name = styled.h5`
    font-size: 1em;
    text-transform: capitalize;
    text-align: center;
    color: #404550;
    margin: 10px 0;
    word-break: break-all;
    width: fit-content;
`;

const TypeTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 15px;
    align-items: center;
    justify-content: center;
`;


function PokemonCardPreview({
    name,
    number,
    sprite,
    types,
    onThumbnailClick
}) {

    const typesList = types.map(current => current.type.name);

    return (
        <Suspense fallback={<Spinner />}>
            <CardPreview>
                <Thumbnail data-pokemon={name} onClick={onThumbnailClick}>
                    <p>{number}</p>
                    <img
                        src={sprite}
                        alt={`Sprite of Pokémon N°${number} named ${name} of types ${typesList.join(", ")}`}
                        title={name}
                    />
                </Thumbnail>
                <Name >{name}</Name>
                <TypeTags>
                    {
                        typesList.map(type => {
                            const { color, background } = setTypeColors(type);

                            return <Tag key={uuid()} color={color} background={background}>{type}</Tag>;
                        })
                    }
                </TypeTags>
            </CardPreview >
        </Suspense>
    );
}


PokemonCardPreview.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    sprite: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default PokemonCardPreview;