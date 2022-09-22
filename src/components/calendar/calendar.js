import React from "react";
import { CalendarGrid } from "./calendar-grid";
import moment from "moment/moment";
import "moment/locale/ru";
import styled from "styled-components";
import { Monitor } from "./monitor";
import { Title } from "./title";
import { useState } from "react";

const ShadowWraper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;
const Calendar = () => {
  moment.updateLocale("ru", { week: { dow: 1 } });
  //const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday((prev) => moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <ShadowWraper>
      <Title></Title>
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      ></Monitor>
      <CalendarGrid startDay={startDay} />
    </ShadowWraper>
  );
};

export { Calendar };
