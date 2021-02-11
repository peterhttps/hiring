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


export const WrapperPortfolio = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 3rem;

    & h1 {
        text-align: center;
        font-size: 2.3rem;
    }
`;

export const ContainerPortfolio = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3rem;
`;

export const StockCard = styled.div`
    margin: 1rem .5rem;
    padding: 2rem 4rem;
    background: ${props => props.theme.colors.c400};
    border-radius: 10px;
    color: white;
    width: 250px;
    cursor: pointer;
    transition: .3s;
`;

export const StockTitle = styled.h1``;
