import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantsList from 'src/components/PlantsList';
// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// == Import css
import './visitorCalendar.scss';

// == VisitorCalendar Component
// == props from initial state visitorCalendarReducer
const VisitorCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  plantsSchedules,
  isReadOnly,
  plantsCalendars,
  changeIsVisible,
  selected,
  displayPlants,
  fetchPlants,
  isCalendarMode,
  changeCalendarMode,
  plants,
  getPlantsList,
}) => {
  // == ref to calendar to get instance
  const calendarRef = createRef();

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
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
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
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
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
    const getDate = document.querySelector('.visitorCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  // == function to display plants by region
  // == (change isVisible on true if value of option === calendarId)
  const handleOptionSelect = (evt) => {
    displayPlants();
    const getOptionValue = evt.target.value;
    plantsSchedules.map((item) => {
      if (item.calendarId === getOptionValue) {
        item.isVisible = true;
      }
      else {
        item.isVisible = false;
      }
    });
    changeIsVisible(plantsSchedules);
    // console.log(plantsSchedules);
  };

  // test response api action case fetchPlants
  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <>
      <div className="visitorCalendar">
        <select className="visitorCalendarSelectRegion" onChange={handleOptionSelect}>
          <option className="option" value="">Choisis ta région!</option>
          <option className="option" value="6">Auvergne-Rhône-Alpes</option>
          <option className="option" value="7">Bourgogne-Franche-Comté</option>
          <option className="option" value="8">Bretagne</option>
          <option className="option" value="9">Centre-Val de Loire</option>
          <option className="option" value="10">Corse</option>
          <option className="option" value="11">Grand Est</option>
          <option className="option" value="12">Hauts-de-France</option>
          <option className="option" value="13">Île-de-France</option>
          <option className="option" value="14">Normandie</option>
          <option className="option" value="15">Nouvelle-Aquitaine</option>
          <option className="option" value="16">Occitanie</option>
          <option className="option" value="17">Pays de la Loire</option>
          <option className="option" value="18">Provence-Alpes-Côte d'Azur</option>
        </select>
        {selected && (
          <>
            <div className="toggle">
              <button
                className="toggle menu-btn"
                type="button"
                onClick={() => {
                  changeCalendarMode(!isCalendarMode);
                }}
              >
                {isCalendarMode ? 'Désactiver' : 'Activer'} l'affichage en liste
              </button>
            </div>
            {!isCalendarMode
              ? (
                <>
                  <div className="visitorCalendar-buttonsTodayMonth">
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
                      <ChevronLeft size={12} />
                    </button>
                    <button type="button" className="visitorCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
                      <ChevronRight size={12} />
                    </button>
                    <p className="visitorCalendar-currentMonth">{currentMonthAndYear}</p>
                  </div>

                  <Calendar
                    // == I put key here for new render
                    // key={plantsSchedules[0].id} get better key id undifined
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
                    schedules={plantsSchedules}
                    // == plants calendars data
                    calendars={plantsCalendars}
                    // == possible or not to click on calendar or schedules (boolean)
                    isReadOnly={isReadOnly}
                  />
                </>
              )
              : (
                <PlantsList
                  plants={plants}
                  getPlantsList={getPlantsList}
                  handleOptionSelect={handleOptionSelect}
                />
              )}
          </>
        )}


      </div>
    </>
  );
};

VisitorCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  displayPlants: PropTypes.func.isRequired,
  changeIsVisible: PropTypes.func.isRequired,
  isCalendarMode: PropTypes.bool.isRequired,
  changeCalendarMode: PropTypes.func.isRequired,
  plants: PropTypes.array.isRequired,
  getPlantsList: PropTypes.func.isRequired,
  // myTheme: PropTypes.arrayOf(
  //   PropTypes.shape({
  //   }).isRequired,
  // ).isRequired,
};

// == Export
export default VisitorCalendar;
