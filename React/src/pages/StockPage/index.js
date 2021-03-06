import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoadingSpin from "react-loading-spin";

import {
  Wrapper,
  Container,
  WrapperStock,
  ContainerStock,
  ContainerStockInfos,
  StockTitle,
  StockPrice,
} from "./styles";
import TopBar from "../../components/TopBar";

import api from "../../services/api";
import StockGraph from "../../components/StockGraph";
import TimeCompare from "../../components/TimeCompare";
import StockCompare from "../../components/StockCompare";
import StockAdd from "../../components/StockAdd";
import { LoadingSpinContainer } from "../../components/Global/styles";

function StockPage() {
  let { id } = useParams();
  const history = useHistory();
  const [loadingStockInfos, setLoadingStockInfos] = useState(true);
  const [stockInfos, setStockInfos] = useState([]);
  const [graphInfos, setGraphInfos] = useState([]);

  useEffect(() => {
    async function getStock() {
      const resultInterday = await api.get(
        `?function=GLOBAL_QUOTE&symbol=${id}&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`
      );
      const resultDaily = await api.get(
        `?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${id}&outputsize=full&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`
      );
      const timeSeries = resultDaily.data["Time Series (Daily)"];

      if (!resultInterday.data["Global Quote"] || !timeSeries) {
        history.push("/");
      }

      setStockInfos(resultInterday.data["Global Quote"]);
      setGraphInfos(timeSeries);
      setLoadingStockInfos(false);
    }

    getStock();
  }, [id, history]);

  function parseValueToFloat(string) {
    return parseFloat(string).toFixed(2);
  }

  return (
    <Wrapper>
      <Container>
        <TopBar />
        <WrapperStock>
          {!loadingStockInfos ? (
            <ContainerStock>
              <StockTitle>{id}</StockTitle>

              <StockPrice>
                <div>
                  {!loadingStockInfos && (
                    <h2> $ {parseValueToFloat(stockInfos["05. price"])}</h2>
                  )}
                </div>
              </StockPrice>
              {!loadingStockInfos && <StockAdd actualStock={id} />}
              <ContainerStockInfos>
                <div>
                  <p>open</p>
                  {!loadingStockInfos && (
                    <h1>$ {parseValueToFloat(stockInfos["02. open"])}</h1>
                  )}
                </div>
                <div>
                  <p>high</p>
                  {!loadingStockInfos && (
                    <h1>$ {parseValueToFloat(stockInfos["03. high"])}</h1>
                  )}
                </div>
                <div>
                  <p>low</p>
                  {!loadingStockInfos && (
                    <h1>$ {parseValueToFloat(stockInfos["04. low"])}</h1>
                  )}
                </div>
                <div>
                  <p>volume</p>
                  {!loadingStockInfos && <h1>{stockInfos["06. volume"]}</h1>}
                </div>
                <div>
                  <p>latest trading day</p>
                  {!loadingStockInfos && (
                    <h1>{stockInfos["07. latest trading day"]}</h1>
                  )}
                </div>
              </ContainerStockInfos>
              {!loadingStockInfos && <StockGraph data={graphInfos} />}
              {!loadingStockInfos && <TimeCompare data={graphInfos} />}
              {!loadingStockInfos && (
                <StockCompare actualStockData={stockInfos} />
              )}
            </ContainerStock>
          ) : (
            <LoadingSpinContainer>
              <LoadingSpin />
            </LoadingSpinContainer>
          )}
        </WrapperStock>
      </Container>
    </Wrapper>
  );
}

export default StockPage;
