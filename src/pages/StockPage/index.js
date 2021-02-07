import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import { Wrapper, Container, WrapperStock, ContainerStock, ContainerStockInfos, StockTitle, StockPrice } from "./styles";
import TopBar from "../../components/TopBar";

import api from '../../services/api';
import StockGraph from "../../components/StockGraph";
import TimeCompare from "../../components/TimeCompare";


const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];


function StockPage() {
    let { id } = useParams();
    const [loadingStockInfos, setLoadingStockInfos] = useState(true);
    const [stockInfos, setStockInfos] = useState([]);
    const [graphInfos, setGraphInfos] = useState([]);

    useEffect(() => {

        async function getStock() {
            const resultInterday = await api.get(`?function=GLOBAL_QUOTE&symbol=${id}&apikey=7MN1KILIT0TIGGLR`);
            const resultDaily = await api.get(`?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${id}&outputsize=full&apikey=7MN1KILIT0TIGGLR`);
            

            //console.log(resultDaily);
            //console.log(resultInterday.data["Global Quote"]);
            setStockInfos(resultInterday.data["Global Quote"]);
            const timeSeries = resultDaily.data["Time Series (Daily)"];
            setGraphInfos(timeSeries);
            //console.log(timeSeries);
            setLoadingStockInfos(false);
            
        }

        getStock();

    }, [id]);

    function parseValueToFloat(string) {
        return parseFloat(string).toFixed(2)
    }

    return (
        <Wrapper>
            <Container>
                <TopBar />
                <WrapperStock>
                    <ContainerStock>
                        <StockTitle>{id}</StockTitle>
                        <StockPrice>
                            <div>
                            {!loadingStockInfos && <h2> $ {parseValueToFloat(stockInfos["05. price"])}</h2>}
                            </div>
                        </StockPrice>
                        <ContainerStockInfos>
                            <div>
                                <p>open</p>
                                {!loadingStockInfos && <h1>$ {parseValueToFloat(stockInfos["02. open"])}</h1>}
                            </div>
                            <div>
                                <p>high</p>
                                {!loadingStockInfos && <h1>$ {parseValueToFloat(stockInfos["03. high"])}</h1>}
                            </div>
                            <div>
                                <p>low</p>
                                {!loadingStockInfos && <h1>$ {parseValueToFloat(stockInfos["04. low"])}</h1>}
                            </div>
                            <div>
                                <p>volume</p>
                                {!loadingStockInfos && <h1>{stockInfos["06. volume"]}</h1>}
                            </div>
                            <div>
                                <p>latest trading day</p>
                                {!loadingStockInfos && <h1>{stockInfos["07. latest trading day"]}</h1>}
                            </div>
                        </ContainerStockInfos>
                        {!loadingStockInfos && <StockGraph data={graphInfos}/>}
                        {!loadingStockInfos && <TimeCompare data={graphInfos}/>}
                        
                    </ContainerStock>
                </WrapperStock>
            </Container>
        </Wrapper>
    );
}

export default StockPage;
