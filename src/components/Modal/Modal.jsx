import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffffad;
    overflow: hidden !important;
    z-index: 999;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Dialog = styled.div`
/* Landscape phones and down */
@media (min-width: 320px) { 
    display: flex;
    flex-direction: row;
    min-width: 80vw;
    min-height: 75vh;
    justify-content: center;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 12px;
    border-radius: 15px;
}

/* Landscape phone to portrait tablet */
@media (min-width: 480px) { 
    display: flex;
    flex-direction: row;
    min-width: 90vw;
    min-height: 80vh;
    justify-content: center;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 12px;
    border-radius: 15px;
}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) { 
    display: flex;
    flex-direction: row;
    min-width: 400px;
    min-height: 700px;
    justify-content: center;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 12px;
    border-radius: 15px;
}

/* Large desktop */
@media (min-width: 1200px) { 
    display: flex;
    flex-direction: row;
    min-width: 400px;
    min-height: 700px;
    justify-content: center;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 12px;
    border-radius: 15px;
}
`;


function Modal({ children, onDismiss }) {
    const navigate = useNavigate();

    const dismissModal = () => {
        navigate(-1);
    };

    return (
        <Container onClick={onDismiss}>
            <Wrapper>
                <Dialog onClick={e => e.stopPropagation()}>
                    {children}
                </Dialog>
            </Wrapper>
        </Container>
    );
}


export default Modal;