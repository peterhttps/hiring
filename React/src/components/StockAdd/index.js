import React, { useContext, useEffect, useState } from "react";
import { StockContext } from "../../providers/stockProvider";

import { Wrapper } from "./styles";
import { ActionButton } from "../Global/styles";

function StockAdd({ actualStock }) {
  const { stocks, setStocks } = useContext(StockContext);
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    if (stocks !== null) {
      stocks.forEach((element) => {
        if (element.symbol === actualStock) {
          setIsPresent(true);
        }
      });
    }
  }, [stocks, actualStock]);

  function addStock() {
    setStocks((stocks) => [
      ...stocks,
      {
        symbol: actualStock,
      },
    ]);
    setIsPresent(true);
  }

  function removeStock() {
    setStocks(stocks.filter((item) => item.symbol !== actualStock));
    setIsPresent(false);
  }

  return (
    <Wrapper>
      {isPresent ? (
        <ActionButton onClick={() => removeStock()}>
          Remove from Portfolio
        </ActionButton>
      ) : (
        <ActionButton onClick={() => addStock()}>Add to Portfolio</ActionButton>
      )}
    </Wrapper>
  );
}

export default StockAdd;
