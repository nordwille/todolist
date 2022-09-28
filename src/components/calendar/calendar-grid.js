import styled from "styled-components";
import moment from "moment/moment";
import React from "react";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) =>
    props.isHeader ? "#bddbbd" : "rgb(18, 77, 38)"};
  ${(props) => props.isHeader && "border-bottom: 1px solid rgb(18, 77, 38)"}
`;
const CellWrapper = styled.div`
  padding-left: 4px;
  min-width: 50px;
  min-height: ${(props) => (props.isHeader ? 24 : 72)}px;
  background-color: ${(props) => (props.isWeekend ? "#81e2a5" : "#bddbbd")};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.isSelectedMonth ? "rgb(18, 77, 38)" : "rgba(60, 74, 65, 0.750)"};
`;
const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;
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

const CalendarGrid = ({
  startDay,
  today,
  totalDays,
  events,
  openFormHander,
}) => {
  const day = startDay.clone().subtract(1, "day");

  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth key={i}>
            <RowInCell justifyContent={"flex-end"} pr={1}>
              {moment()
                .day(i + 1)
                .format("ddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>

      <GridWrapper>
        {daysArray.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell justifyContent={"flex-end"}>
              <ShowDayWrapper>
                <DayWrapper onClick={() => openFormHander("Создать")}>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  ) : (
                    dayItem.format("D")
                  )}
                </DayWrapper>
              </ShowDayWrapper>

              <EventListWrapper>
                {events
                  .filter(
                    (event) =>
                      event.date >= dayItem.format("X") &&
                      event.date <= dayItem.clone().endOf("day").format("X")
                  )
                  .map((event) => (
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
        ))}
      </GridWrapper>
    </>
  );
};
export { CalendarGrid };
