import styled from "styled-components";
import React from "react";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #bddbbd;
  color: rgb(18, 77, 38);
  padding: 0 8px 0 8px;
`;

const MonthWrapper = styled("span")`
  font-size: 36px;
`;
const YearWrapper = styled(MonthWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;
const ButtonWrapers = styled("div")`
  display: flex;
  align-items: center;
`;
const ButtonWraper = styled("button")`
  border-color: rgba(18, 77, 38, 0.228);
  height: 26px;
  margin-right: 2px;
  border-radius: 4px;
  line-height: 4px;
  background-color: #81e2a5;
  color: rgb(18, 77, 38);
  font-weight: bold;
`;

const TodayButton = styled(ButtonWraper)`
  padding-right: 16px;
  padding-left: 16px;
`;

const Monitor = ({ today, prevHandler, todayHandler, nextHandler }) => (
  <DivWrapper>
    <div>
      <YearWrapper>{today.format("MMMM")}</YearWrapper>
      <MonthWrapper>{today.format("YYYY")}</MonthWrapper>
    </div>
    <ButtonWrapers>
      <ButtonWraper onClick={prevHandler}>&lt;</ButtonWraper>
      <TodayButton onClick={todayHandler}>Сегодня</TodayButton>
      <ButtonWraper onClick={nextHandler}>&gt;</ButtonWraper>
    </ButtonWrapers>
  </DivWrapper>
);
export { Monitor };
