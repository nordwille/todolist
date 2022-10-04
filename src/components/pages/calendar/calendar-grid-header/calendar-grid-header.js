import moment from "moment";
import React from "react";
import {
  CellWrapper,
  RowInCell,
} from "../containers/styled-components/styled-components";

export const CalendarGridHeader = () => {
  <>
    {[...Array(7)].map((_, i) => (
      <CellWrapper isHeader isSelectedMonth key={i}>
        <RowInCell justifyContent={"flex-end"} pr={1}>
          {moment()
            .day(i + 1)
            .format("ddd")}
        </RowInCell>
      </CellWrapper>
    ))}
  </>;
};
