import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Wrapper, Container, DatePickerContainer, ResultContainer, DateButton } from "./styles";

import { registerLocale } from  "react-datepicker";
import us from 'date-fns/locale/en-US';
import { ActionButton } from "../Global/styles";
registerLocale('en-US', us)

function TimeCompare({data}) {
    const [dateFromGlobal, setDateFromGlobal] = useState(new Date());
    const [dateToGlobal, setDateToGlobal] = useState(new Date());
    const [finalValue, setFinalValue] = useState("");

    const ref = React.createRef();

    const CustomDatePicker = React.forwardRef(({ value, onClick }, ref) => (
      <DateButton onClick={onClick} ref={ref}>{value}</DateButton>
  ));

    function timeCompare() {
      const days = Object.keys(data);

      const dateFrom = dateFromGlobal.toISOString().slice(0, 10);
      const dateTo = dateToGlobal.toISOString().slice(0, 10);
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

      const dateFromClose = parseFloat(data[days[from]]["4. close"]).toFixed(2);
      const dateToClose = parseFloat(data[days[to]]["4. close"]).toFixed(2);

      const result = dateToClose - dateFromClose;
      setFinalValue(result.toFixed(2));
    }



    return (
        <Wrapper>
          <h1>Time Compare</h1>
          <hr />
          <Container>
            <DatePickerContainer>
            <DatePicker
                selected={dateFromGlobal}
                onChange={(date) => setDateFromGlobal(date)}
                dateFormat="yyyy-MM-dd"
                locale="en-US"
                customInput={<CustomDatePicker />}
                ref={ref}
            />
            <DatePicker
                selected={dateToGlobal}
                onChange={(date) => setDateToGlobal(date)}
                dateFormat="yyyy-MM-dd"
                locale="en-US"
                customInput={<CustomDatePicker />}
                ref={ref}
            />
            <ActionButton onClick={() => timeCompare()}>Calculate</ActionButton>
            </DatePickerContainer>
            <ResultContainer>
              <h1>$ {finalValue}</h1>
            </ResultContainer>
            
            </Container>
        </Wrapper>
    );
}

export default TimeCompare;
