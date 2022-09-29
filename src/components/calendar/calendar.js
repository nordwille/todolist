import React, { useEffect } from "react";
import { CalendarGrid } from "./calendar-grid";
import moment from "moment/moment";
import "moment/locale/ru";
import styled from "styled-components";
import { Monitor } from "./monitor";
import { Title } from "./title";
import { useState } from "react";

const url = "http://localhost:5000";
const totalDays = 42;
const defaultEvent = {
  title: "",
  description: "",
  date: moment().format("X"),
};
const ShadowWraper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;
const FormPositionWrapper = styled("div")`
  position: absolute;
  z-index: 105;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
const FormWrapper = styled(ShadowWraper)`
  width: 380px;
  background-color: rgba(119, 160, 133, 0.954);
  color: #dddddd;
  box-shadow: unset;
`;
const EventTitle = styled("input")`
  padding: 4px 12px;
  font-size: 18px;
  width: 100%;
  border: unset;
  background-color: rgba(119, 160, 133, 0.954);
  color: rgb(15, 63, 31);
  outline: unset;
  font-weight: bold;
  border-bottom: 1px solid #464648;
`;
const EventBody = styled("textarea")`
  padding: 4px 12px;
  font-size: 16px;
  height: 80px;
  width: 100%;
  font-weight: bold;
  border: unset;
  background-color: rgba(119, 160, 133, 0.954);
  color: rgb(18, 77, 38);
  outline: unset;
  border-bottom: 1px solid #464648;
`;
const ButtonsWrapper = styled("div")`
  padding: 8px, 14px;
  display: flex;
  justify-content: flex-end;
`;
const ButtonCansel = styled("button")`
  margin-bottom: 5px;
  margin-right: 12px;
  border: unset;
  border-radius: 4px;
  background: #bddbbd;
  color: rgb(15, 63, 31);
  font-weight: bold;
`;
const ButtonCreate = styled(ButtonCansel)``;

const Calendar = () => {
  moment.updateLocale("ru", { week: { dow: 1 } });
  //const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday((prev) => moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  const startDateQuery = startDay.clone().format("X");
  const endDateQuery = startDay.clone().add(totalDays, "days").format("X");

  const [events, setEvents] = useState([]);

  const [method, setMethod] = useState(null);
  const [isShowForm, setShowForm] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(
      `${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`
    ).then((res) =>
      res.json().then((res) => {
        setEvents(res);
      })
    );
  }, [endDateQuery, startDateQuery, today]);

  const openFormHander = (methodName, eventForUpdate, dayItem) => {
    setShowForm(true);
    setEvent(eventForUpdate || { ...defaultEvent, date: dayItem.format("X") });
    setMethod(methodName);
  };
  const canselButtonHandler = () => {
    setShowForm(false);
    setEvent(null);
  };
  const changeEventHandler = (text, field) => {
    setEvent((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const eventFetchHandler = () => {
    const fetchUrl =
      method === `Редактировать`
        ? `${url}/events/${event.id}`
        : `${url}/events`;
    const httpMethod = method === "Редактировать" ? "PATCH" : "POST";
    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((res) => {
        if (method === "Редактировать") {
          setEvents((prevState) =>
            prevState.map((eventEl) => (eventEl.id === res.id ? res : eventEl))
          );
        } else {
          setEvents((prevState) => [...prevState, res]);
        }
        canselButtonHandler();
      });
  };

  const removeEventHandler = () => {
    const fetchUrl = `${url}/events/${event.id}`;
    const httpMethod = "DELETE";
    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setEvents((prevState) =>
          prevState.filter((eventEl) => eventEl.id !== event.id)
        );
        canselButtonHandler();
      });
  };

  return (
    <>
      {isShowForm ? (
        <FormPositionWrapper onClick={canselButtonHandler}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <EventTitle
              value={event.title}
              onChange={(e) => changeEventHandler(e.target.value, "title")}
              placeholder="Название задачи"
            />
            <EventBody
              value={event.description}
              onChange={(e) =>
                changeEventHandler(e.target.value, "description")
              }
              placeholder="Описание задачи"
            />
            <ButtonsWrapper>
              <ButtonCansel onClick={canselButtonHandler}>
                Отменить
              </ButtonCansel>
              <ButtonCreate onClick={eventFetchHandler}>{method}</ButtonCreate>
              {method === "Редактировать" ? (
                <ButtonCreate onClick={removeEventHandler}>
                  Удалить
                </ButtonCreate>
              ) : null}
            </ButtonsWrapper>
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <ShadowWraper>
        <Title></Title>
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
        ></Monitor>
        <CalendarGrid
          startDay={startDay}
          today={today}
          totalDays={totalDays}
          events={events}
          openFormHander={openFormHander}
        />
      </ShadowWraper>
    </>
  );
};

export { Calendar };
