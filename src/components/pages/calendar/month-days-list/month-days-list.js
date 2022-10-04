import React from "react";
import { isDayContainCurrentEvent } from "../../../../helpers/helpers";
import { CalendarCell } from "../calendar-cell/calendar-cell";

export const MonthDaysList = ({
  startDay,
  totalDays,
  today,
  events,
  openFormHander,
}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  return daysMap.map((dayItem) => (
    <CalendarCell
      today={today}
      events={events.filter((event) =>
        isDayContainCurrentEvent(event, dayItem)
      )}
      openFormHander={openFormHander}
      dayItem={dayItem}
    />
  ));
};
