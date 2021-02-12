import React, { useEffect, useState } from "react";

export const StockContext = React.createContext({});

export const StockProvider = (props) => {
  const [stocks, setStocks] = useState(
    JSON.parse(localStorage.getItem("stocks")) || []
  );

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  return (
    <StockContext.Provider value={{ stocks, setStocks }}>
      {props.children}
    </StockContext.Provider>
  );
};
