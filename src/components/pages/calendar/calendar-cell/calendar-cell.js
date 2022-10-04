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
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;
const EventListItemWrapper = styled.li`
  display: flex;
  padding-right: 1px;
  margin-bottom: 2px;
`;
const EventItemWrapper = styled.button`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 126px;
  border: 1px solid rgb(18, 77, 38);
  background: unset;
  background-color: rgba(119, 160, 133, 0.404);
  color: rgb(18, 77, 38);
  border-radius: 4px;
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
            {events.slice(0, 2).map((event) => (
              <EventListItemWrapper key={event.id}>
                <EventItemWrapper
                  onClick={() => openFormHander("Редактировать", event)}
                >
                  {event.title}
                </EventItemWrapper>
              </EventListItemWrapper>
            ))}
            {events.length > 2 ? (
              <EventListItemWrapper key={"show more"}>
                <EventItemWrapper>show more...</EventItemWrapper>
              </EventListItemWrapper>
            ) : null}
          </EventListWrapper>
        </RowInCell>
      </CellWrapper>
    </>
  );
};
