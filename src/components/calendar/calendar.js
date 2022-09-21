import React from "react";
import { CalendarGrid } from "./calendar-grid";
import moment from "moment/moment";
import "moment/locale/ru";
import styled from "styled-components";
import { Monitor } from "./monitor";
import { Title } from "./title";

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
  const today = moment();
  const startDay = today.clone().startOf("month").startOf("week");
  return (
    <ShadowWraper>
      <Title></Title>
      <Monitor today={today}></Monitor>
      <CalendarGrid startDay={startDay} />
    </ShadowWraper>
  );
};

export { Calendar };
