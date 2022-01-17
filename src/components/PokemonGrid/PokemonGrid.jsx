import styled from 'styled-components';


export default styled.div`
    /* Landscape phones and down */
    @media (min-width: 320px) { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 30px;
        max-width: 100%;
        width: 100%;
        align-content: center;
        justify-items: center;
        margin: 30px 0; 
    }

    /* Landscape phone to portrait tablet */
    @media (max-width: 480px) { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 30px;
        max-width: 100%;
        align-content: center;
        justify-items: center;
        margin: 30px 0; 
    }

    /* Portrait tablet to landscape and desktop */
    @media (min-width: 768px) { 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 30px;
        max-width: 100%;
        align-content: center;
        justify-items: center;
        margin: 30px 0; 
    }

    /* Large desktop */
    @media (min-width: 1200px) { 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 30px;
        max-width: 800px;
        align-content: center;
        justify-items: center;
        margin: 30px 0; 
    }
`;