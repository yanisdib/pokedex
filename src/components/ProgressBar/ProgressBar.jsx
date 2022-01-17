import styled from 'styled-components';


const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #ffffff;
    border-radius: 15px;
`;

const Progress = styled.div`
    width: ${({ stat }) => stat}%;
    height: 10px;
    background-color: ${({ background }) => background};
    border-radius: 15px;
`;


function ProgressBar({ stat, color }) {
    return (
        <Bar>
            <Progress stat={stat} background={color} />
        </Bar>
    );
}


export default ProgressBar;