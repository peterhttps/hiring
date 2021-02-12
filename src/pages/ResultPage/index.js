import React, { useEffect, useState } from "react";
import LoadingSpin from 'react-loading-spin';

import {
    Wrapper,
    Container,
    WrapperSearch,
    ContainerSearch,
    SearchInfos,
    ResultBox,
} from "./styles";
import TopBar from "../../components/TopBar";
import { useParams, useHistory } from "react-router-dom";

import api from "../../services/api";
import { LoadingSpinContainer } from "../../components/Global/styles";

function ResultPage() {
    let { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function getSearch() {
            const result = await api.get(
                `?function=SYMBOL_SEARCH&keywords=${id}&apikey=${process.env.REACT_APP_KEY}`
            );

            setLoading(false);
            for (var keys in result.data.bestMatches) {
                // eslint-disable-next-line no-loop-func
                setResults((results) => [
                    ...results,
                    result.data.bestMatches[keys],
                ]);
            }
        }

        getSearch();
    }, [id]);

    return (
        <Wrapper>
            <Container>
                <TopBar />
                <WrapperSearch>
                    {!loading ? 
                    <div>
                    <SearchInfos>
                        <button onClick={() => history.push("/")}>
                            {"<-"} Search Again
                        </button>

                        <h1>Results for "{id}"</h1>
                    </SearchInfos>

                    <ContainerSearch>
                        {loading ? (
                            <h1>carregando</h1>
                        ) : (
                            results.map((result, index) => {
                                return (
                                    <ResultBox key={index} onClick={() => history.push(`/stock/${result["1. symbol"]}`)}>
                                        <h1> {result["1. symbol"]}</h1>
                                        <p>{result["2. name"]}</p>
                                    </ResultBox>
                                );
                            })
                        )}
                    </ContainerSearch>
                    </div>
                    : <LoadingSpinContainer><LoadingSpin /></LoadingSpinContainer>}
                </WrapperSearch>
            </Container>
        </Wrapper>
    );
}

export default ResultPage;
