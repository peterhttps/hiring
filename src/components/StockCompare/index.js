import React, { useState } from 'react';
import api from '../../services/api';

import { Wrapper, Container, CompareStockInputs, CompareContainer, StockBlock, StockValues, StockLine, StockPrice } from './styles';
import { ActionButton } from '../Global/styles';

function StockCompare({ actualStockData }) {
    const [actualData, setActualData] = useState([]);
    const [compareData, setCompareData] = useState([]);
    const [compareStockName, setCompareStockName] = useState("");
    const [showing, setShowing] = useState(false);


    async function compareStocks() {
        const result = await api.get(`?function=GLOBAL_QUOTE&symbol=${compareStockName}&apikey=7MN1KILIT0TIGGLR`);
        setCompareData(result.data["Global Quote"]);
        setShowing(true);
    }

    function parseValueToFloat(string) {
      return parseFloat(string).toFixed(2)
  }

  return (
      <Wrapper>
          <Container>
            <h1>Stock Compare</h1>
            <hr />

            <CompareStockInputs>
              <input type="text" placeholder="Type a Stock" value={compareStockName} onChange={(event) => setCompareStockName(event.target.value)}/>
              <ActionButton onClick={() => compareStocks()}>Compare</ActionButton>
            </CompareStockInputs>
            {showing && 
            <CompareContainer>
              <StockBlock>
                <h1>{actualStockData["01. symbol"]}</h1>
                <StockValues>
                  <StockLine>
                    <p>open</p>
                    <h3>$ {parseValueToFloat(actualStockData["02. open"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>high</p>
                    <h3>$ {parseValueToFloat(actualStockData["03. high"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>low</p>
                    <h3>$ {parseValueToFloat(actualStockData["04. low"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>volume</p>
                    <h3>{actualStockData["06. volume"]}</h3>
                  </StockLine>
                </StockValues>
                <StockPrice>
                  <h3>$ {parseValueToFloat(actualStockData["05. price"])}</h3>
                </StockPrice>
              </StockBlock>

              <StockBlock>
                <h1>{compareData["01. symbol"]}</h1>
                <StockValues>
                  <StockLine>
                    <p>open</p>
                    <h3>$ {parseValueToFloat(compareData["02. open"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>high</p>
                    <h3>$ {parseValueToFloat(compareData["03. high"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>low</p>
                    <h3>$ {parseValueToFloat(compareData["04. low"])}</h3>
                  </StockLine>
                  <StockLine>
                    <p>volume</p>
                    <h3>{compareData["06. volume"]}</h3>
                  </StockLine>
                </StockValues>
                <StockPrice>
                  <h3>$ {parseValueToFloat(compareData["05. price"])}</h3>
                </StockPrice>
              </StockBlock>

            </CompareContainer>}

        </Container>
      </Wrapper>
  
  );
}

export default StockCompare;