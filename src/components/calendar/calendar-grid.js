import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: rgb(18, 77, 38);
`;
const CellWrapper = styled.div`
  min-width: 50px;
  min-height: 50px;
  color: rgb(18, 77, 38);
  background-color: ${(props) => (props.isWeekend ? "#81e2a5" : "#bddbbd")};
`;
const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;
const DayWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({ startDay }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  return (
    <GridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("DDMMYYYY")}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <RowInCell justifyContent={"flex-end"}>
            <DayWrapper>{dayItem.format("D")}</DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
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