import styled from 'styled-components';

export const searchButton = styled.div`
    background: orange;

`;

export const Wrapper = styled.div`
    height: 100vh;
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
`;

export const WrapperSearch = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`;


export const SearchInfos = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    & button {
        background: ${props => props.theme.colors.c400};
        color: white;
        border: none;
        border-radius: 10px;
        padding: 0 1rem;
        margin-right: 2rem;
        cursor: pointer;
        transition: .3s;
        
        &:hover {
            ${props => props.theme.colors.c500};
        }

    }
    
    @media only screen and (max-width: 900px) {
        & h1 {
            font-size: 1.5rem;
        }
    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    flex-wrap: wrap;
    max-width: 1400px;
`;

export const ResultBox = styled.div`
    margin: 1rem .5rem;
    padding: 2rem 5rem;
    background: ${props => props.theme.colors.c400};
    border-radius: 10px;
    color: white;
    width: 250px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background: ${props => props.theme.colors.c500};
    }

    @media only screen and (max-width: 900px) {
        & {
            width: 90%;
        }
    }
`;
