import styled from 'styled-components';

import { Spinner } from '..';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 100%;
    margin: 30px 0;
    bottom: 10vh;
    z-index: 999;
    justify-content: center;
`;

const Button = styled.button`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 45px; 
    background-color: #d10000;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85em;
    font-weight: 600;
    color: #ffffff;
    border-radius: 50px;
    -webkit-box-shadow: 0px 4px 14px 0px rgba(110,110,110,0.63); 
    box-shadow: 0px 4px 14px 0px rgba(110,110,110,0.63);
    cursor: pointer;
`;


function LoadMoreButton({ isLoading, onClick }) {
    return (
        <Wrapper>
            <Button onClick={onClick}>
                {
                    isLoading ? <Spinner /> : 'Load more'
                }
            </Button>
        </Wrapper>
    );
}


export default LoadMoreButton;