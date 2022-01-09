import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        list-style-type: none;
        border: none;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text}; 
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        transition: color background 0.25s linear;
    }

    h2 {
        font-weight: 600;
        line-height: 30px;
        margin: 10px 0;
    }

    input,
    select {
        font-size: 0.9em;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        padding: 0 10px;
    
        &:focus {
            outline: none;
        }
    }
`;


export default GlobalStyles;