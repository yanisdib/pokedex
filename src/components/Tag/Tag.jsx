import styled from 'styled-components';


export default styled.div`
    display: flex;
    width: fit-content;
    background-color: ${({ background }) => background};
    font-size: 0.85em;
    font-weight: 600;
    color: ${({ color }) => color};
    text-align: center;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 20px;
`;