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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    & input {
        width: 30rem;
        height: 3rem;
        font-size: 1.5rem;
        padding: .5rem 1rem;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    & button {
        background: ${props => props.theme.colors.c400};
        border: none;
        color: white;
        padding: 1rem 2rem;
        font-size: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        border-radius: 10px;
        transition: .3s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    & button:hover {
        background: ${props => props.theme.colors.c500};
    }
`;
