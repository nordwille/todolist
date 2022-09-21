import moment from "moment/moment";

const CaledarGrid = () => {
  moment.updateLocale("ru", { week: { dow: 1 } });
  window.moment = moment;
  const startDay = moment().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");
  const calendar = [];
  const day = startDay.clone();
  const totalDays = 42;
  const daysArray = [...Array(42)];

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, "day");
  }

  return daysArray.map((_, i) => <div key={i}>{i}</div>);
};

export { CaledarGrid };
