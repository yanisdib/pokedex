import styled from 'styled-components';


export default styled.div`
/* Landscape phones and down */
@media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;
    align-items: center;
    justify-content: center;
    max-width: 1450px;
    min-height: 100vh;
    margin: auto;
}

/* Landscape phone to portrait tablet */
@media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;
    align-items: center;
    justify-content: center;
    max-width: 1450px;
    min-height: 100vh;
    margin: auto;
}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;
    align-items: center;
    justify-content: center;
    max-width: 1450px;
    min-height: 100vh;
    margin: auto;
}

/* Large desktop */
@media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;
    align-items: center;
    justify-content: flex-end;
    max-width: 1450px;
    min-height: 100vh;
    margin: auto;
}
`;