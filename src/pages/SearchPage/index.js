import React, { useState } from 'react';

import { Wrapper, Container, WrapperSearch, ContainerSearch } from './styles';
import TopBar from '../../components/TopBar';
import { useHistory } from 'react-router-dom';

function SearchPage() {
    const history = useHistory();
    
    const [stock, setStock] = useState("");

    const handleSearchInput = event => {
        setStock(event.target.value);
    }

    const submitInput = event => {
        if (event.key === 'Enter') {
            searchStock();
        }
    }

    function searchStock() {
        history.push(`/results/${stock}`);
    }

    return (
        <Wrapper>
            <Container>
                <TopBar/>
                <WrapperSearch>
                    <ContainerSearch>
                        <h1>Stock Market</h1>
                        <input type="text" placeholder="Search a Stock..." onChange={handleSearchInput} onKeyPress={submitInput} value={stock}/>
                        <button onClick={() => searchStock()}>Search</button>
                    </ContainerSearch>
                </WrapperSearch>
                
            </Container>
        </Wrapper>
  
    );
}

export default SearchPage;