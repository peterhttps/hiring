import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 5rem;
`;

export const Container = styled.div`
`;

export const CompareStockInputs = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    & input {
        background: none;
        border: 1px solid ${props => props.theme.text};
        padding: 1rem;
        font-size: 1.1rem;
        color: ${props => props.theme.text};
        border-radius: 5px;
    }
`;

export const CompareContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
`;

export const StockBlock = styled.div`
    background: ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    width: 300px;
    justify-content: center;

    & h1 {
        margin-top: 1rem;
        text-align: center;    
    }
`;
export const StockValues = styled.div`
    margin-top: 2rem;
`;
export const StockLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

export const StockPrice = styled.div`
    margin-top: 2rem;
    display: inline-block;
    border: 2px solid ${props => props.theme.colors.c300};
    padding: 1rem 2rem;
    border-radius: 30px;
        
    & h3 {
        text-align: center;
    }
`;