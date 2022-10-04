import React from "react";
import {
  CellWrapper,
  RowInCell,
} from "../containers/styled-components/styled-components";
import styled from "styled-components";
import { isCurrentDay, isSelectedMonth } from "../../../../helpers/helpers";

const DayWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`;
const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;
const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const EventListWrapper = styled.ul`
  margin: unset;
  padding-left: 4px;
  list-style-type: none;
`;
const EventItemWrapper = styled.button`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 126px;
  border: unset;
  background: unset;
  color: rgb(18, 77, 38);
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 16px;
`;

export const CalendarCell = ({ dayItem, today, openFormHander, events }) => {
  return (
    <>
      <CellWrapper
        key={dayItem.unix()}
        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        isSelectedMonth={isSelectedMonth(dayItem, today)}
      >
        <RowInCell justifyContent={"flex-end"}>
          <ShowDayWrapper>
            <DayWrapper
              onClick={() => openFormHander("Создать", null, dayItem)}
            >
              {isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format("D")}</CurrentDay>
              ) : (
                dayItem.format("D")
              )}
            </DayWrapper>
          </ShowDayWrapper>

          <EventListWrapper>
            {events.map((event) => (
              <li key={event.id}>
                <EventItemWrapper
                  onClick={() => openFormHander("Редактировать", event)}
                >
                  {event.title}
                </EventItemWrapper>
              </li>
            ))}
          </EventListWrapper>
        </RowInCell>
      </CellWrapper>
    </>
  );
};
