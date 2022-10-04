import styled from "styled-components";
import React from "react";
import { CalendarGridHeader } from "./calendar-grid-header/calendar-grid-header";
import { MonthDaysList } from "./month-days-list/month-days-list";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) =>
    props.isHeader ? "#bddbbd" : "rgb(18, 77, 38)"};
  ${(props) => props.isHeader && "border-bottom: 1px solid rgb(18, 77, 38)"}
`;

const CalendarGrid = ({
  startDay,
  today,
  totalDays,
  events,
  openFormHander,
}) => {
  return (
    <>
      <GridWrapper isHeader></GridWrapper>
      <CalendarGridHeader />
      <GridWrapper>
        <MonthDaysList
          startDay={startDay}
          totalDays={totalDays}
          events={events}
          openFormHander={openFormHander}
          today={today}
        />
      </GridWrapper>
    </>
  );
};
export { CalendarGrid };
