import styled from "styled-components";
import React from "react";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #bddbbd;
  color: rgb(18, 77, 38);
  padding: 16px;
`;

const MonthWrapper = styled("span")`
  font-size: 32px;
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
  height: 24px;
  margin-right: 2px;
  border-radius: 4px;
  background-color: #81e2a5;
  line-height: 4px;
  color: rgb(18, 77, 38);
`;

const TodayButton = styled(ButtonWraper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const Monitor = ({ today }) => (
  <DivWrapper>
    <div>
      <YearWrapper>{today.format("MMMM")}</YearWrapper>
      <MonthWrapper>{today.format("YYYY")}</MonthWrapper>
    </div>
    <ButtonWrapers>
      <ButtonWraper>&lt;</ButtonWraper>
      <TodayButton>Сегодня</TodayButton>
      <ButtonWraper>&gt;</ButtonWraper>
    </ButtonWrapers>
  </DivWrapper>
);
export { Monitor };