import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Weekdays({
  locale,
  localeUtils,
  weekdayComponent,
  weekdayElement,
}) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const elemProps = {
      key: i,
      className: 'DayPicker-Weekday',
      weekday: i,
      localeUtils,
      locale,
    };
    const elem = weekdayElement ?
      React.cloneElement(weekdayElement, elemProps) :
      React.createElement(weekdayComponent, elemProps);
    days.push(elem);
  }

  return (
    <div className="DayPicker-Weekdays" role="rowgroup">
      <div className="DayPicker-WeekdaysRow" role="columnheader">
        {days}
      </div>
    </div>
  );
}

Weekdays.propTypes = {
  locale: PropTypes.string.isRequired,
  localeUtils: DayPickerPropTypes.localeUtils.isRequired,
  weekdayComponent: PropTypes.func.isRequired,
  weekdayElement: PropTypes.element,
};
