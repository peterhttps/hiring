import styled from 'styled-components';

export const searchButton = styled.div`
    background: orange;

`;

export const Wrapper = styled.div`
    height: 100vh;
    flex: 1;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.19' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
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
