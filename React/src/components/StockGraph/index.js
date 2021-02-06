import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { DateButton, Wrapper, ContainerDate, FilterButton } from './styles';

function StockGraph({ data }) {
    const [allData, setAllData] = useState([]);

    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [dateFromGlobal, setDateFromGlobal] = useState(new Date());
    const [dateToGlobal, setDateToGlobal] = useState(new Date());


    useEffect(() => {
        const dataStock = [];
        // 30 days
        //console.log(data);
        const days = Object.keys(data);
        var i = 0;
        for (i; i < 100; i++) {
            //console.log(days[i]);
            const values = data[days[i]];
            const dataCell = {
                date: days[i],
                price: values["4. close"],
            };
            dataStock.push(dataCell);
        }
        console.log(dataStock);
        ///console.log([...dataStock].reverse());
        setGraphData(dataStock.reverse());
        setLoading(false);
    }, [data]);


    function changeData() {
        const days = Object.keys(data);
        //console.log(dateFromGlobal, dateTo);
        console.log(dateFromGlobal.toISOString().slice(0,10));
        console.log(dateToGlobal.toISOString().slice(0,10));
        
        //console.log(dates, dateStrings);
        
        const dateFrom = dateFromGlobal.toISOString().slice(0,10);
        const dateTo = dateToGlobal.toISOString().slice(0,10);
        var from = 0;
        var to = 0;

        for (var i = 0; i < days.length - 1; i++) {
            // console.log(days[i]);
            if (days[i] === dateFrom) {
                console.log("eh igua");
                from = i;
            }
            if (days[i] === dateTo) {
                console.log("eh igua tb");
                to = i;
            }
        }

        var dateStock = [];
        for (var toD = to; toD <= from; toD++) {
            const values = data[days[toD]];
            const dataCell = {
                date: days[toD],
                price: values["4. close"],
            };
            dateStock.push(dataCell);
        }
        console.log(dateStock);
        setGraphData(dateStock.reverse());
        console.log(to, from);
    }

    const CustomDatePicker = ({ value, onClick }) => (
        <DateButton onClick={onClick}>
          {value}
        </DateButton >
      );

    return (
        <Wrapper>
            {!loading && (
                <LineChart
                    width={1000}
                    height={300}
                    data={graphData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            )}

            <ContainerDate>
                <DatePicker selected={dateFromGlobal} onChange={date => setDateFromGlobal(date)} dateFormat="yyyy-MM-dd" customInput={<CustomDatePicker />} />
                <DatePicker selected={dateToGlobal} onChange={date => setDateToGlobal(date)} locale="es" dateFormat="yyyy-MM-dd" customInput={<CustomDatePicker />}/>
                <FilterButton onClick={() => changeData()}>filter</FilterButton>
            </ContainerDate>
        </Wrapper>
    );
}

export default StockGraph;
