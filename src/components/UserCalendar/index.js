import React, { createRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// Pictures
import semer from 'src/assets/images/semer.png';
import planter from 'src/assets/images/planter.png';
import recolter from 'src/assets/images/recolter.png';

// == Import css
import './userCalendar.scss';

// == UserCalendar Component
// == props from initial state userCalendarReducer
const UserCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  userPlants,
  isReadOnly,
  plantsCalendars,
  fetchUserPlants,
  // plant, maybe prop to not use
  newPlant,
  addPlant,
  deletePlant,
  plantSelected,
  selectPlant,
  plantToRemove,
}) => {
  // == ref to calendar to get instance
  const calendarRef = createRef();

  // TODO dependance userPlants ?
  useEffect(() => {
    fetchUserPlants();
  }, []);
  // console.log('userPlants dans le component', userPlants);

  // == get current date to display on the top of calendar
  // == today's date
  const currentDate = new Date();
  // == Format the date to see just month and year, and change timezone to Paris
  const currentMonthAndYear = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
  });

  // == functions to dynamise buttons today prev and next month
  // == and display date on the top of calendar
  const handleClickTodayButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.today();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.prev();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.next();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const onClickSchedule = useCallback((e) => {
    // const { calendarId, id } = e.schedule;
    // const el = calendarRef.current.calendarInst.getElement(id, calendarId);
    // console.log(e, el.getBoundingClientRect());
    console.log('component e.schedule', e.schedule);
    selectPlant(e.schedule);
  }, []);

  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    // console.log(scheduleData);
    let schedule = {};
    if (scheduleData.calendarId === '1') {
      schedule = {
        id: String(Math.random()),
        calendarId: '1',
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? 'allday' : 'time',
        dueDateClass: '',
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw['class'],
        },
        state: scheduleData.state,
        color: '#474647',
        bgColor: '#f3c465',
        dragBgColor: '#daece5',
        borderColor: '#fad689',
      };
    }
    else if (scheduleData.calendarId === '2') {
      schedule = {
        id: String(Math.random()),
        calendarId: '2',
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? 'allday' : 'time',
        dueDateClass: '',
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw['class'],
        },
        state: scheduleData.state,
        color: '#474647',
        bgColor: '#f46d5f',
        dragBgColor: '#daece5',
        borderColor: '#e4bd9f',
      };
    }
    else if (scheduleData.calendarId === '3') {
      schedule = {
        id: String(Math.random()),
        calendarId: '3',
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? 'allday' : 'time',
        dueDateClass: '',
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw['class'],
        },
        state: scheduleData.state,
        color: '#474647',
        bgColor: '#9ed2bf',
        dragBgColor: '#daece5',
        borderColor: '#daece5',
      };
    }
    // calendarRef.current.calendarInst.createSchedules([schedule]);
    // console.log('schedule component', schedule);
    // == auto calendar harvest if schedule.calendarId === 1 || === 2
    const scheduleDateStart = new Date(schedule.start);
    scheduleDateStart.setMonth(scheduleDateStart.getMonth() + 1);
    const scheduleDateEnd = new Date(schedule.end);
    scheduleDateEnd.setMonth(scheduleDateEnd.getMonth() + 1);

    let schedule2 = {};
    if (schedule.calendarId === '1' || schedule.calendarId === '2') {
      schedule2 = {
        id: String(Math.random()),
        calendarId: '3',
        title: schedule.title,
        isAllDay: schedule.isAllDay,
        start: { dates: scheduleDateStart },
        end: { dates: scheduleDateEnd },
        category: schedule.isAllDay ? 'allday' : 'time',
        dueDateClass: '',
        location: schedule.location,
        raw: {
          class: schedule.raw['class'],
        },
        state: schedule.state,
        color: '#474647',
        bgColor: '#9ed2bf',
        dragBgColor: '#daece5',
        borderColor: '#daece5',
      };
    }
    // console.log(schedule.start);
    // console.log(schedule2.start);
    newPlant(schedule);
    addPlant();
    newPlant(schedule2);
    addPlant();
  }, []);

  const onBeforeDeleteSchedule = useCallback((res) => {
    console.log('res', res);

    // const { id, calendarId } = res.schedule;
    // calendarRef.current.calendarInst.deleteSchedule(id, calendarId);
    // console.log('res.schedule component', res.schedule);
    deletePlant(res.plantSelected);
  }, []);

  const onBeforeUpdateSchedule = useCallback((e) => {
    console.log(e);

    // const { schedule, changes } = e;

    // calendarRef.current.calendarInst.updateSchedule(
    //   schedule.id,
    //   schedule.calendarId,
    //   changes,
    // );
  }, []);
  return (
    <div className="userCalendar">
      <div className="userCalendar-buttonsTodayMonth">
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
          <ChevronLeft size={12} />
        </button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
          <ChevronRight size={12} />
        </button>
        <p className="userCalendar-currentMonth">{currentMonthAndYear}</p>
      </div>
      <div className="legend">
        <div className="sowing">
          <img
            src={semer}
            alt="semis"
            width="30"
          />
        </div>
        <div className="planting">
          <img
            src={planter}
            alt="semis"
            width="30"
          />
        </div>
        <div className="harvest">
          <img
            src={recolter}
            alt="semis"
            width="30"
          />
        </div>
      </div>
      <Calendar
        // == I put key here for new render
        // == ref to current calendar ?
        ref={calendarRef}
        // == view monthly
        view={view}
        // == calendar options
        month={{
          daynames: daynames,
          startDayOfWeek: startDayOfWeek,
        }}
         // == layout calendar and schedules
        theme={myTheme}
        // == plants schedules data
        schedules={userPlants}
        // == plants calendars data
        calendars={plantsCalendars}
        // == possible or not to click on calendar or schedules (boolean)
        isReadOnly={isReadOnly}
        useCreationPopup={true}
        useDetailPopup={true}
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    </div>
  );
};

UserCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  myTheme: PropTypes.object.isRequired,
  // userPlants: PropTypes.array.isRequired,
  plantsCalendars: PropTypes.array.isRequired,
  addPlant: PropTypes.func.isRequired,
  fetchUserPlants: PropTypes.func.isRequired,
  newPlant: PropTypes.func.isRequired,
};

// == Export
export default UserCalendar;
