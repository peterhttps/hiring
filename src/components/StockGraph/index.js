import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Wrapper, ContainerDate } from "./styles";
import { DateButton } from "../Global/styles";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import us from "date-fns/locale/en-US";
import { ActionButton } from "../Global/styles";
registerLocale("en-US", us);

function StockGraph({ data }) {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateFromGlobal, setDateFromGlobal] = useState(new Date());
  const [dateToGlobal, setDateToGlobal] = useState(new Date());

  const ref = React.createRef();

  useEffect(() => {
    const dataStock = [];

    const days = Object.keys(data);
    var i = 0;
    for (i; i < 30; i++) {
      const values = data[days[i]];
      const dataCell = {
        date: days[i],
        price: values["4. close"],
      };
      dataStock.push(dataCell);
    }

    setGraphData(dataStock.reverse());
    setLoading(false);
  }, [data]);

  function changeData() {
    const days = Object.keys(data);

    const dateFrom = dateFromGlobal.toISOString().slice(0, 10);
    const dateTo = dateToGlobal.toISOString().slice(0, 10);
    var from = 0;
    var to = 0;

    for (var i = 0; i < days.length - 1; i++) {
      if (days[i] === dateFrom) {
        from = i;
      }
      if (days[i] === dateTo) {
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
    setGraphData(dateStock.reverse());
  }

  const CustomDatePicker = React.forwardRef(({ value, onClick }, ref) => (
    <DateButton onClick={onClick} ref={ref}>
      {value}
    </DateButton>
  ));

  return (
    <Wrapper>
      {!loading && (
        <ResponsiveContainer width="99%" aspect={3}>
          <LineChart
            width={1200}
            height={300}
            data={graphData}
            margin={{
              top: 5,
              right: 80,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip contentStyle={{ color: "#000000" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      <ContainerDate>
        <p>From: </p>
        <DatePicker
          selected={dateFromGlobal}
          onChange={(date) => setDateFromGlobal(date)}
          locale="en-US"
          dateFormat="yyyy-MM-dd"
          customInput={<CustomDatePicker />}
          ref={ref}
        />
        <p>To: </p>
        <DatePicker
          selected={dateToGlobal}
          onChange={(date) => setDateToGlobal(date)}
          locale="en-US"
          dateFormat="yyyy-MM-dd"
          customInput={<CustomDatePicker />}
          ref={ref}
        />
        <ActionButton onClick={() => changeData()}>Filter</ActionButton>
      </ContainerDate>
    </Wrapper>
  );
}

export default StockGraph;
