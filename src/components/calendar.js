import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;

  .weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;

    .days {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;

      &.today {
        background-color: var(--blue);
        border-radius: 50%;
        color: var(--white);
      }

      &.days-name {
        color: #cecece;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: var(--semiBold);
      }
    }
  }
`;

export default function Calendar() {
  const value = moment();
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  return (
    <StyledCalendar>
      <>
        <div className="weeks">
          {calendar[0].map((week) => (
            <div className="days days-name">
              {week.format('ddd').toString()}
            </div>
          ))}
        </div>
        {calendar.map((week) => (
          <div className="weeks">
            {week.map((day) => (
              <div className={`days ${day.isSame(moment(), 'day') && 'today'}`}>
                {day.format('D').toString()}
              </div>
            ))}
          </div>
        ))}
      </>
    </StyledCalendar>
  );
}
