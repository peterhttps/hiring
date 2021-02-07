import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 5rem;
`;

export const Container = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const DatePickerContainer = styled.div`
    display: flex;
`;

export const ResultContainer = styled.div`
    background: ${props => props.theme.secundary};
    padding: 2rem 7rem;
`;

export const ConfirmButton = styled.button`
    background: ${props => props.theme.colors.c400};
    padding: 5px 10px;
    color: #FFF;
    border-radius: 4px;
    border: none;
    margin: 0 .5rem;
`;

export const DateButton = styled.button`
    background: #1A5684;
    padding: 5px 10px;
    color: #FFF;
    border-radius: 4px;
    border: none;
    margin: 0 .5rem;

`;