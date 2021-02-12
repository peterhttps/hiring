import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../../components/TopBar";
import { StockContext } from "../../providers/stockProvider";

import {
  Wrapper,
  Container,
  WrapperPortfolio,
  ContainerPortfolio,
  StockCard,
  StockTitle,
} from "./styles.js";

function PortfolioPage() {
  const history = useHistory();
  const { stocks } = useContext(StockContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isZeroSized, setIsZeroSized] = useState(true);

  useEffect(() => {
    if (stocks !== null) {
      setIsEmpty(false);
    }
    if (stocks.length > 0) {
      setIsZeroSized(false);
    }
  }, [stocks]);

  return (
    <Wrapper>
      <Container>
        <TopBar />
        <WrapperPortfolio>
          <h1>My Stocks</h1>
          {isZeroSized && <h2>You have no stock added</h2>}
          {!isEmpty && (
            <ContainerPortfolio>
              {stocks.map((stock) => {
                return (
                  <StockCard
                    key={stock.symbol}
                    onClick={() => history.push(`/stock/${stock.symbol}`)}
                  >
                    <StockTitle>{stock.symbol}</StockTitle>
                  </StockCard>
                );
              })}
            </ContainerPortfolio>
          )}
        </WrapperPortfolio>
      </Container>
    </Wrapper>
  );
}

export default PortfolioPage;
