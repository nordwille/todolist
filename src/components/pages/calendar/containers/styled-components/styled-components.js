import styled from "styled-components";

export const CellWrapper = styled.div`
  padding-left: 2px;
  min-width: 50px;
  min-height: ${(props) => (props.isHeader ? 24 : 86)}px;
  background-color: ${(props) => (props.isWeekend ? "#81e2a5" : "#bddbbd")};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.isSelectedMonth ? "rgb(18, 77, 38)" : "rgba(60, 74, 65, 0.750)"};
`;
export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;
