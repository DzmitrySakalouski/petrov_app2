import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

export const CalendarComponent = ({ classes }) => {
    const newdays = [new Date(), new Date(2020, 0, 11), new Date(2020, 0, 12), new Date(2020, 0, 15)];

    const isDateInArray = date => {
        const selectedDate = newdays.find(dateItem => {
            return date.toDateString() === dateItem.toDateString();
        })

        return !!selectedDate;
    }

    const setSelectedClassName = ({ activeStartDate, date, view }) => {
        return isDateInArray(date) ? 'selected' : null
    };
  
    return (
        <div className="calendar">
            <Calendar 
                selectRange={true} 
                tileClassName={setSelectedClassName}
                className="react-calendar-custom " />
        </div>
    )
}
