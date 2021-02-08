import styled from 'styled-components';

export const searchButton = styled.div`
    background: orange;

`;

export const Wrapper = styled.div`
    height: 100%;
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding-bottom: 5rem;
`;


export const WrapperStock = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const ContainerStock = styled.div`
    margin-top: 2rem;
`;

export const StockTitle = styled.h1`
    font-size: 5rem;
    text-align: center;
`;

export const StockPrice = styled.div`
    
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    & div {
        display: inline-block;
        border: 2px solid ${props => props.theme.colors.c300};
        padding: 1rem 2rem;
        border-radius: 30px;
    }
`;

export const ContainerStockInfos = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;


    & div {
        margin: 0 0rem;
        text-align: center;
        padding: 2rem 3rem; 
        background: ${props => props.theme.secundary};
        & h1 {
            font-size: 1.5rem;
            margin-top: .5rem;
        }
    }

    & div:last-child {
    }
`;
