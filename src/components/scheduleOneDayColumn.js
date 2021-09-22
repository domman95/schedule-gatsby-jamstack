import React from 'react';
import styled from 'styled-components';

const StyledOneDayColumn = styled.div`
  display: grid;
  grid-auto-rows: 70px;
  border-radius: var(--borderRadius);
  height: 100%;

  .dashboard-visits-header {
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    align-content: center;
    justify-items: center;
    background-color: #f4f4f4;
    border-bottom: 1px solid #cecece;
    z-index: 9;

    .number {
      font-size: 24px;
      font-weight: var(--semiBold);
      color: var(--black);
    }

    .name {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: var(--semiBold);
      color: #aaaaaa;
    }
  }
`;

const Hour = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  justify-items: center;
  background-color: #fafafa;
  border-bottom: 1px solid #cecece;
  cursor: pointer;

  &::before {
    content: '${({ content }) => content}';
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #aaaaaa;
    font-weight: var(--semiBold);
    font-size: 14px;
    opacity: 0.7;
  }
`;

const hours = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

export default function ScheduleOneDayColumn({ onClick }) {
  return (
    <StyledOneDayColumn className="column">
      <div className="dashboard-visits-header">
        <p className="number">19</p>
        <p className="name">środa</p>
      </div>
      {hours.map((time, i) => (
        <Hour
          role="button"
          className="dashboard-visits-hour"
          key={i}
          onClick={onClick}
          content={time}
        />
      ))}
    </StyledOneDayColumn>
  );
}
