import styled from 'styled-components';

export const ContainerTopBar = styled.div`
    background: ${props => props.theme.colors?.c300};
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 0 2rem;

    & div {
        color: white;
        font-weight: 500;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        transition: .3s;

        &:hover {
            background: ${props => props.theme.colors?.c200};
        }
    }

    & button {
        background: ${props => props.theme.colors?.c400};
        border: none;
        margin-right: 2rem;
        padding: .5rem;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
            background: ${props => props.theme.colors?.c500};
        }
    }

    @media only screen and (max-width: 900px) {
        & div {
            font-size: .9rem;
        }

        & svg {
            width: 1.2rem;
            height: auto;
        }
    }
`;