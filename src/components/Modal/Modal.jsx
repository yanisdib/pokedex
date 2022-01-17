import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 100%;
    justify-content: center;
`;

const Dialog = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 400px;
    min-height: 700px;
    justify-content: center;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 12px;
    border-radius: 15px;
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