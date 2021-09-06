import {
  SAVE_USER_PLANTS, SAVE_NEW_PLANT, NEW_PLANT, PLANT_TO_DELETE, SELECT_PLANT,
} from 'src/actions/userCalendar';

// == Visitor Calendar initialState : just calendar display, not data schedules
const initialState = {
  // == maybe use calendar and calendarId to filter by place
  // == calendar view monthly
  view: 'month',
  // == day names on the top of the calendar
  daynames: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  // == first day of the week : Lundi
  startDayOfWeek: 1,
  myTheme: {
    // == default color border #e5e5e5
    'common.border': '1px solid #f8cba9',
    'common.backgroundColor': 'white',
    // == default holiday color #ff4040 - other colors name #333
    'common.holiday.color': '#474647',
    'common.saturday.color': '#474647',
    'common.dayname.color': '#474647',
    'common.today.color': '#333',
    // creation guide style
    'common.creationGuide.backgroundColor': 'rgba(81, 92, 230, 0.05)',
    'common.creationGuide.border': '1px solid #515ce6',
    // month header 'dayname'
    // default value 31px
    'month.dayname.height': '45px',
    // default value #e5e5e5
    'month.dayname.borderLeft': '1px solid #f8cba9',
    'month.dayname.paddingLeft': '10px',
    'month.dayname.paddingRight': '10px',
    // default value inherit
    'month.dayname.backgroundColor': '#c1c1c1',
    // default value 12px
    'month.dayname.fontSize': '14px',
    'month.dayname.fontWeight': 'normal',
    'month.dayname.textAlign': 'left',
    // month day grid cell 'day'
    // default value rgba(255, 64, 64, 0.4)
    'month.holidayExceptThisMonth.color': '#f3c465',
    // default value gba(51, 51, 51, 0.4)
    'month.dayExceptThisMonth.color': '#f3c465',
    'month.weekend.backgroundColor': 'inherit',
    // default value 14px
    'month.day.fontSize': '15px',
    // month schedule style
    // default value 5px
    'month.schedule.borderRadius': '5px',
    // default value 24px
    'month.schedule.height': '25px',
    'month.schedule.marginTop': '2px',
    'month.schedule.marginLeft': '8px',
    'month.schedule.marginRight': '8px',
    // month more view
    'month.moreView.border': '1px solid #d5d5d5',
    'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
    'month.moreView.backgroundColor': 'white',
    'month.moreView.paddingBottom': '17px',
    'month.moreViewTitle.height': '44px',
    'month.moreViewTitle.marginBottom': '12px',
    'month.moreViewTitle.backgroundColor': 'inherit',
    'month.moreViewTitle.borderBottom': 'none',
    'month.moreViewTitle.padding': '12px 17px 0 17px',
    'month.moreViewList.padding': '0 17px',
    // week header 'dayname'
    'week.dayname.height': '42px',
    'week.dayname.borderTop': '1px solid #e5e5e5',
    'week.dayname.borderBottom': '1px solid #e5e5e5',
    'week.dayname.borderLeft': 'inherit',
    'week.dayname.paddingLeft': '0',
    'week.dayname.backgroundColor': 'inherit',
    'week.dayname.textAlign': 'left',
    'week.today.color': '#333',
    'week.pastDay.color': '#bbb',
    // week vertical panel 'vpanel'
    'week.vpanelSplitter.border': '1px solid #e5e5e5',
    'week.vpanelSplitter.height': '3px',
    // week daygrid 'daygrid'
    'week.daygrid.borderRight': '1px solid #e5e5e5',
    'week.daygrid.backgroundColor': 'inherit',
    'week.daygridLeft.width': '72px',
    'week.daygridLeft.backgroundColor': 'inherit',
    'week.daygridLeft.paddingRight': '8px',
    'week.daygridLeft.borderRight': '1px solid #e5e5e5',
    'week.today.backgroundColor': 'rgba(81, 92, 230, 0.05)',
    'week.weekend.backgroundColor': 'inherit',
    // week timegrid 'timegrid'
    'week.timegridLeft.width': '72px',
    'week.timegridLeft.backgroundColor': 'inherit',
    'week.timegridLeft.borderRight': '1px solid #e5e5e5',
    'week.timegridLeft.fontSize': '11px',
    'week.timegridLeftTimezoneLabel.height': '40px',
    'week.timegridLeftAdditionalTimezone.backgroundColor': 'white',
    'week.timegridOneHour.height': '52px',
    'week.timegridHalfHour.height': '26px',
    'week.timegridHalfHour.borderBottom': 'none',
    'week.timegridHorizontalLine.borderBottom': '1px solid #e5e5e5',
    'week.timegrid.paddingRight': '8px',
    'week.timegrid.borderRight': '1px solid #e5e5e5',
    'week.timegridSchedule.borderRadius': '2px',
    'week.timegridSchedule.paddingLeft': '2px',
    'week.currentTime.color': '#515ce6',
    'week.currentTime.fontSize': '11px',
    'week.currentTime.fontWeight': 'normal',
    'week.pastTime.color': '#bbb',
    'week.pastTime.fontWeight': 'normal',
    'week.futureTime.color': '#333',
    'week.futureTime.fontWeight': 'normal',
    'week.currentTimeLinePast.border': '1px dashed #515ce6',
    'week.currentTimeLineBullet.backgroundColor': '#515ce6',
    'week.currentTimeLineToday.border': '1px solid #515ce6',
    'week.currentTimeLineFuture.border': 'none',
    // week creation guide style
    'week.creationGuide.color': '#515ce6',
    'week.creationGuide.fontSize': '11px',
    'week.creationGuide.fontWeight': 'bold',
    // week daygrid schedule style
    'week.dayGridSchedule.borderRadius': '2px',
    'week.dayGridSchedule.height': '24px',
    'week.dayGridSchedule.marginTop': '2px',
    'week.dayGridSchedule.marginLeft': '8px',
    'week.dayGridSchedule.marginRight': '8px',
  },
  // == List of regions
  plantsCalendars: [
    {
      id: '1',
      name: 'Semi',
      color: '#474647',
      bgColor: '#f3c465',
      dragBgColor: '#daece5',
      borderColor: '#fad689',
    },
    {
      id: '2',
      name: 'Plantation',
      color: '#474647',
      bgColor: '#f46d5f',
      dragBgColor: '#daece5',
      borderColor: '#e4bd9f',
    },
    {
      id: '3',
      name: 'Récolte',
      color: '#474647',
      bgColor: '#9ed2bf',
      dragBgColor: '#daece5',
      borderColor: '#daece5',
    },
  ],
  // == List of plants
  userPlants: [],

  plant: {},

  plantSelected: {},

  plantToRemove: {},

  // == to click on the calendar
  isReadOnly: false,
};

function userCalendarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_PLANT: {
      return {
        ...state,
        plant: action.plant,
      };
    }

    case PLANT_TO_DELETE: {
      return {
        ...state,
        plantToRemove: state.plantSelected,
        userPlants: state.userPlants.filter((item) => item.id !== action.plant.id_plantation),
      };
    }

    case SELECT_PLANT: {
      return {
        ...state,
        plantSelected: action.plant,
      };
    }

    case SAVE_USER_PLANTS:
      return {
        ...state,
        userPlants: action.userPlants,
      };

    case SAVE_NEW_PLANT:
      return {
        ...state,
        userPlants: [...state.userPlants, action.plant],
      };

    default:
      return state;
  }
}

export default userCalendarReducer;
