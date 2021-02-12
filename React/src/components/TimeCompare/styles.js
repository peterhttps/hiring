import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 5rem;

    @media only screen and (max-width: 900px) {
        & {
            padding: 0 1rem;
        }
    }
`;

export const Container = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 900px) {
        & {
            flex-direction: column;
        }
    }
`;

export const DatePickerContainer = styled.div`
    display: flex;
`;

export const ResultContainer = styled.div`
    background: ${props => props.theme.secundary};
    padding: 2rem 7rem;

    @media only screen and (max-width: 900px) {
        & {
            margin-top: 2rem;
        }
    }
`;