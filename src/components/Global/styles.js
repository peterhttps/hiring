import styled from 'styled-components';


export const ActionButton = styled.button`
    background: ${props => props.theme.colors?.c400};
    padding: 5px 10px;
    color: #FFF;
    border-radius: 4px;
    border: none;
    margin: 0 .5rem;
    cursor: pointer;
`;

export const LoadingSpinContainer = styled.div`
    margin-top: 10rem;
`;

export const DateButton = styled.button`
    background: #1A5684;
    padding: 5px 10px;
    color: #FFF;
    border-radius: 4px;
    border: none;
    margin: 0 .5rem;

`;