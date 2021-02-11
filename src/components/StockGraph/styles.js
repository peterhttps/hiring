import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 900px) {
        & {
            align-items: left;
        }
    }
    
`;

export const ContainerDate = styled.div`
    margin-top: 1rem;
    display: flex;    
`;
