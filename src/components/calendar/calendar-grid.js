import styled from "styled-components";
import moment from "moment/moment";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) =>
    props.isHeader ? "#bddbbd" : "rgb(18, 77, 38)"};
  ${(props) => props.isHeader && "border-bottom: 1px solid rgb(18, 77, 38)"}
`;
const CellWrapper = styled.div`
  min-width: 50px;
  min-height: ${(props) => (props.isHeader ? 24 : 64)}px;
  background-color: ${(props) => (props.isWeekend ? "#81e2a5" : "#bddbbd")};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.isSelectedMonth ? "rgb(18, 77, 38)" : "rgba(60, 74, 65, 0.750)"};
`;
const RowInCell = styled.div`
  display: flex;
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

const CalendarGrid = ({ startDay, today }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth>
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
              <DayWrapper>
                {!isCurrentDay(dayItem) && dayItem.format("D")}
                {isCurrentDay(dayItem) && (
                  <CurrentDay>{dayItem.format("D")}</CurrentDay>
                )}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};
export { CalendarGrid };

/*
  const endDay = moment().endOf("month").endOf("week");
  const calendar = [];
  
   while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, "day");
  }*/
